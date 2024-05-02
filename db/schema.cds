namespace org.qmacro;

aspect cuid {
  key ID : UUID;
}

entity Books : cuid {
  title  : String;
  author : Association to Authors;
}

entity Authors : cuid {
  name  : String;
  books : Association to many Books
            on books.author = $self
}

entity Orders : cuid {
  comment : String;
  Items   : Composition of many OrderItems
              on Items.parent = $self;
}

entity OrderItems { // to be accessed through Orders only
  key parent   : Association to Orders;
  key pos      : Integer;
      quantity : Integer;
}