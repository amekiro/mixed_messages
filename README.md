# MIXED MESSAGES README

## Scope of project
Mixed Messages is a project from the Full Stack Engineer track on Codecademy, started by Caitlyn Sun on December 25, 2021. Requirements of the project are:

- User runs program --> user receives new randomized output
- Databank of messages should have at minimum 3 entries

This project is focused on JavaScript usage.

## How to test JavaScript code
1. Node.js and a command line application such as GitBash is required to test the code.
2. Once the directory containing this README and the mixed_messages_script files is selected, run "$node mixed_messages_script.js" in the command line.
3. Upon running the comman, a title should appear with "Story: ". Underneath that, a randomly generated story should be written out.

## Required information
Required information to run the JavaScript code are stored in the following arrays (December 26, 2021 update: arrays within an object):

- noun: Nouns are listed in the array as an array with the following variations:
    - singular
    - plural
- verb: Verbs are listed in the array as an array with the following variations:
    - present tense
    - past tense
    - -ing
- adj: Adjectives are listed in the array as an array with the following variations:
    - dictionary form (default)
    - comparison (est)
- adv: Adverbs do not have a variation, and thus are listed as a single array (December 26, 2021 update: In order to make updates easier should a variation of an adverb be used, each word has been added to its own array)

For nouns, verbs and adjections, the matrix array allows for additions should a mad lib need a variation not currently listed.

## How JavaScript code functions
Upon running $node mixed_messages_script.js, the following steps are run:

1. An array of stories are created

    A. Depending on the number of nouns, verbs, adjectives and adverbs requested, storyFac will either generate lists of random words or alert the user that there are not enough words in the word bank to create the story.

    B. Words are added to the anonymous function that is referenced in storyFac.
    
2. Array of stories is filtered to remove unsuccessful stories.
3. Random index is created based on the number of successful stories.
4. A random story is printed to the console.

## Updates
- December 26, 2021
    - In order to allow flexibility for additional word types in newer mad libs, the nouns, verbs, adjectives and adverbs have been added into a single object. This removes the need for them to use their own parameters in the storyFac and storyFun functions. Instead, an object with corresponding numbers or words repectively would be used, allowing easy additions for word types

## Task List
1. Plan project objectives and timeline - COMPLETE
    
    - Generate mad libs for a story
    - Should be completed by December 26, 2021

2. Decide on message outputs - COMPLETE

    - Choose mad libs template - randomized
    - Choose words - randomzed

3. Set up Git for version control - COMPLETE
4. Write JavaScript code for functionality and test with Node.js - COMPLETE

    - Needed functions

        - Select mad libs template
        - Select mad libs words
        - Return completed story

5. Set up message storage - COMPLETE
6. Assemble all components - COMPLETE