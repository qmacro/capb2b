using { cuid, Country } from '@sap/cds/common';

service bookshop {
  entity Books : cuid {
    title: String;
  }
  entity Authors : cuid {
    name: String;
    countryOfBirth: Country;
  }
}

service banana {
  entity something as projection on bookshop.Books {
    title
  }
}