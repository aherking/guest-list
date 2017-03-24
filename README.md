# guest-list 
Planning with ease by planning easy. Guest List Guru keeps your guests in 'check'.  
This is the Ultimate Guest List App for all your party planning needs!

Architecture Tree of App:

PROJECT
  |MOCK
    -guests.json (Mock data used when first creating app)
  |PUBLIC
    -scripts
      --controllers
        --- main.js
        --- guest.js
      --directives
        --- guest.js
      --services
        --- data.js
      --app.js
    -styles
      --- main.css
      --- checkbox-empty.svg
      --- checkbox-filled.svg
    -templates
      --- guest.html
    -vendor
      --- angular.js (Angular Library)
    -index.html
    -readme.md  
  |SRC
    -api
      -- index.js
    -models
      -- guest.js
    -app.js
    -database.js
  |PACKAGE.JSON
  |node_modules
  |.gitignore

