/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'A terminal that facilitates easy interaction with files, other developers, and interacting with gitHub to ensure work is properly backed up.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'An online platform where code can be stored in repositories. This code can be pulled, forked/cloned, and observed by multiple developers working on the same project. Developers can push projects back up to gitHub to save their work and share it with others.'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {
    description: 'This command creates a new repository.',
    code: 'git init'
};

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: 'After forking a repository on gitHub, you can copy the code link and use it with git clone in your terminal. This deposits the forked repository onto your personal computer for your own use',
    code: 'git clone'
};

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: 'You can use git status in your terminal on VS Code to identify if you have modified code that needs to be committed and pushed up to gitHub.',
    code: 'git status'
};

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: 'After seeing through git status that you have modified code to commit, you first need to use git add . in order to add the changes to the queue, ready to be committed and pushed up to gitHub.',
    code: 'git add .'
};

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: 'Once you have added the modified code, you can commit those changes as well as record a message that will appear in gitHub stating what modifications you made to the code. This message serves as a brief record of those changes made.',
    code: 'git commit -m"Message goes here"'
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
let addRemote = {
    description: 'This adds a new remote into the directory your repository is located at.',
    code: 'git remote add origin'
};

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: 'Once your modified code is added and committed, you can use git push to push, or upload, said code to gitHub where it will be safely stored.',
    code: 'git push'
};
