###2-16-REST-framework
###a.k.a. "Lebowski"
***A RESTful HTTP framework... that abides***

Coded by Sam Hamm as an assignment for the Code Fellows JavaScript Development Accelerator in February 2015. Collaborators at various points have included Tricia Buckenberger, Gaye Bulut, and Rory Sterley.

Instructions
--
In the main JS file of the project, use these functions:

To start the server:

  dude.wakeUp();

To add a new directory:

  dude.letsGoBowling('rug');

Note that 'rug' is used as a placeholder here. You are free to use your own names for directories, of course.

Once a directory is created, new files are created by the framework and are numbered sequentially. The standard REST commands may be used:

**POST** - creates a new file, and can also store data if JSON data is appended to the command

**PUT** - overwrites a specified file with new content

**GET** - retrieves data from a specified file

**PATCH** - merges data appended to the command with the data already in place, such that all unique elements remain

**DELETE** - deletes the specified file
