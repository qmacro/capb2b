aspect cuid {key ID: UUID; }

service bookshop {
  entity Books : cuid {
    title: String;
    author: Association to Authors;
  }
  entity Authors : cuid {
    name: String;
    books: Association to many Books on books.author = $self
  }
}