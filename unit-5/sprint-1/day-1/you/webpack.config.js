
const path = require("path");

const bundleFormate = 
// module.exports =
{
    //  entry : --> for initialy webpack enter in index.js which main directory 
    // means webpack read first index.js file and it create bundle.js based on index.js condition
    entry : "./src/index.js",
    // and we remove dist folder and bundle.js file
    // and build folder and bundle.js file by -->
    output :
    {
        // path --> give path for build folder

        // . represent the current directory
        path : path.resolve(".", "build"),
        // where we create bundle according to condition in bundle.js
        filename : "bundle.js",
        // after that we run npm run build;
        
    },

    // for removing warning in terminal
    // and for development we use development
    // it will give more clarification(comment) about what happened in bundle.js file
    // for that we mode : development
    // In development phase we care that how it create bundle fast
    // means in development it will not do any optimization
    // mode : "development",

    // if we want only output not clarification(comment);
    // then we use mode : "production"

    // In production phase we care about how fast it run;
    // In production phase it will not be doing good work at makeing bundle

    mode : "production",
    
    // and by default webpack consider it as in production phase

    // now I have downloaded and I am going to write some code here


    module : 
    {
        rules : 
        [
            {
                
                // by this it find .css file in index.js
                // and if it able to find then it give all .css file to syle-loader css-loader to bundle it
                test : /\.css$/ , use : ["style-loader", "css-loader"]
            }
        ]
    }
}







module.exports = bundleFormate;