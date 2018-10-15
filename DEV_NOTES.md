Notes from Erik about this App:
- The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

- I added a little functionality that required a slight deviation from the mock-up for the list view. I kept the search form active. If the user performs another search, the list updates for that search. If the search is submitted with a blank search string, the full list is displayed.

This functionality continues into the detail view. Once in a detail view, the user can perform a new search, and the list results for that search will replace the detail view.

- I noticed the "Next" and "Previous" buttons in the list view. I didn't have time to implement this feature. I also thought the user experience would be improved with scrolling through the list, rather than clicking through the list. I certainly prefer this style of navigating lists of data.

Nonetheless, I could build this feature if it were strictly required. I would probably assign an incrementing key to each list item, and have the "Next" button increase the starting key by five. The "Previous" button would decrease the starting key by five, until the key of the first list item was less than five. At present, the key for each list item is that item's inspection_id from the API data.

- I used an empty box generated with CSS to hold a place for an image in the list and detail views.