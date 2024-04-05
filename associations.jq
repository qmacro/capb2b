#!/usr/bin/env -S jq -f

# Lists entities and shows any elements that are associations

def entities: select(.value.kind == "entity");
def associations: select(.value.type == "cds.Association");

.definitions
| to_entries
| map(
    entities
    | {
       (.key):
        .value.elements
       | with_entries(associations)
      }
  )
