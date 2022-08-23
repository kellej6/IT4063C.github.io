---
sidebar_position: 2.2
title: SQL Refresher
sidebar_label: SQL2
---
## Insert
Selected fields
```sql
insert into tkey_moral (id_moral_nr, moral_bez) 
values 
    (1, 'gut'), 
    (2, 'schlecht'), 
    (3, 'schlecht');
```

## Update
Update by condition
```sql
update tbl_kunde set name = 'Menzer' where name = 'Waltenspühl-Menzer'
update tass_police set praem_stufe = 101 where praem_stufe = 108
```

## Delete
### All
```sql
delete from tbl_kunde
```
### Condition
```sql
delete from tkey_moral where id_moral_nr = 4
delete from tbl_kunde where vorname = 'Peter' and name = 'Fischer' or vorname = 'Martin' and name = 'Müller'
```

## Select
### Basic
```sql
select dt_jahr from dbo.tbl_stueck
```
### Condition
```sql
select dt_jahr from dbo.tbl_stueck where dt_jahr is not null
```
### Order
```sql
select dt_jahr from dbo.tbl_stueck
where dt_jahr is not null
order by dt_jahr desc
```
### Distinct
```sql
select distinct dt_jahr from dbo.tbl_stueck
where dt_jahr is not null
order by dt_jahr asc
```
### And Condition
```sql
select * from tbl_stueck where dt_jahr = 1970 and dt_zeit > 3
```
### Between
```sql
select * from tbl_stueck where dt_jahr = 1970 and dt_zeit between 3 and 10
```
### Like
```sql
select * from tbl_stueck where dt_stueck_titel like 'Let%'
```
### Count
```sql
select count(dt_stueck_titel) from tbl_stueck where dt_stueck_titel like 'Let%'
```
### Having and without join
```sql
select i.dt_name, count(s.dt_stueck_titel) from tbl_stueck as s, tkey_interpret as i
where  s.fi_interpret = i.id_interpret
group by i.dt_name
having count(s.dt_stueck_titel) >10
order by count(s.dt_stueck_titel) de
```
## Join the hard way
### Inner Join
```sql
select s.dt_stueck_titel, i.dt_name
from tbl_stueck as s, tkey_interpret as i
where  s.fi_interpret = i.id_interpret
order by s.dt_stueck_titel
```
### Multi Join
```sql
select sa.id_jahr, st.dt_stueck_titel, ip.dt_name
from tbl_stueck as st, tass_stueck_sampler as ss, tkey_sampler as sa, tkey_interpret as ip
where ss.id_fi_stueck_nr = st.id_stueck_nr 
and ss.id_fi_jahr = sa.id_jahr
and  st.fi_interpret = ip.id_interpret
order by  st.dt_stueck_titel
```

## Join the right way
### Inner Equi Key Joining
```sql
select dt_stueck_titel, dt_name
from tbl_stueck join tkey_interpret 
on fi_interpret = id_interpret
order by dt_stueck_titel
```
### Multi Inner Equi Key Joining
```sql
select id_fi_jahr, dt_stueck_titel, dt_name
from tbl_stueck
join tass_stueck_sampler on id_fi_stueck_nr = id_stueck_nr
join tkey_interpret on fi_interpret = id_interpret
order by  dt_stueck_titel
```

## About Joins
![sql join summary](http://i.stack.imgur.com/hzl8e.png)
```sql
SELECT customers.id, customers.name, items.name, customers.state 
FROM customers, items
WHERE customers.id=seller_id
ORDER BY customers.id
```
**Join tables** -> Joining two tables together in a query output. The third line is important because it shows how the two tables are related (in this case it is their key values).   

```sql
SELECT customers.name, items.name FROM customers
LEFT OUTER JOIN items ON customers.id=seller_id
```
**LEFT/RIGHT OUTER JOIN** -> Takes the table left of the word 'LEFT' or 'RIGHT' (in this case customers) and joins it regardless of whether it has any values or not. So the above statement shows all users/customers, even if they aren't selling anything.  

## Select with Subqueries 
Select max and min values
```sql
select dt_stueck_titel as Titel, dt_zeit as Zeit
from tbl_stueck
where dt_zeit = (select max(dt_zeit) from tbl_stueck)
or dt_zeit = (select min(dt_zeit) from tbl_stueck)
order by dt_zeit;
```
Select with query in condition
```sql
select dt_stueck_titel as Titel, dt_zeit as Zeit
from tbl_stueck
where dt_zeit between (select avg(dt_zeit) from tbl_stueck)*0.9
and (select avg(dt_zeit) from tbl_stueck)*1.1
order by dt_zeit;
```
Select query as value
```sql
select dt_stueck_titel as Titel,
dt_zeit/(select avg(dt_zeit) from tbl_stueck)*100 as Zeit
from tbl_stueck
where dt_stueck_titel = 'You Shook Me'
```

## Union
Unify two result sets with a condition
```sql
select *  from
(select dt_stueck_titel as titel, 'stück' as 'type' from tbl_stueck
union
select dt_name as titel,  'inter' as 'type' from tkey_interpret
union
select dt_stao as titel,  'stao' as 'type' from tkey_standort) as t
where t.titel like '%boy%'
```

## Transactions
Run a transaction
```sql
begin transaction
update tass_police set bezahlt = 0 where id_fi_kunde = 3533 and id_fi_vers_art = 1700
commit
-- or rollback
```

## Variables
Declare
```sql
DECLARE @veraenderung SMALLINT = 180;
DECLARE @neue_summe INT;
```

## Function
A function can be called from inside a statement just like any other function and can return a scalar value.

Create - Get value from table
```sql
create function f_plic_bez()
  returns decimal(10,2)
  as begin
  return (select sum(bezahlt) from tass_police)
  end;
go
select  dbo.f_plic_bez() AS 'Summe aller bezahlten Leistungen'
go
```
Drop
```sql
drop function f_bezahlt_versich
```
Create - With parameters
```sql
create function f_rabatt(@name varchar(40), @vers varchar(30))
  returns int
  as begin
  return (select (praem_stufe-100)*10 from  tass_police
  join tbl_kunde on id_fi_kunde = id_kunde
  join tkey_versicherung on id_fi_vers_art = id_vers_art
  where name = @name and vers_bez = @vers)
  end
```

## Stored Procedure
Stored procedures are stored as precompilated code (stored routine) and called by the programmer wherever it wants to fire. Stored procedure can return value(s).

Create and execute
```sql
CREATE PROCEDURE p_polic_del @fname VARCHAR(30), @versich VARCHAR(30)
  AS
  BEGIN
    DELETE FROM tass_police
      FROM tbl_kunde, tkey_versicherung
        WHERE name = @fname
          AND id_kunde = id_fi_kunde
          AND id_fi_vers_art = id_vers_art
          AND vers_bez = @versich
    IF @@ROWCOUNT = 0
      PRINT 'Police existiert nicht.'
      ELSE PRINT 'Löschung vollzogen.'
  END
GO

EXECUTE p_polic_del 'Meier', 'Taggeld';
```

