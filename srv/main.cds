using org from '../db/schema';

service bookshop {
  entity Books as projection on org.qmacro.Books;
  entity Authors as projection on org.qmacro.Authors;
  entity Orders as projection on org.qmacro.Orders;
}