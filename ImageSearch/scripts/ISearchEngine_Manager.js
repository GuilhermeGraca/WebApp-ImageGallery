/**
 * @fileoverview Main entry point of the ISearchEngine application.
 * This script initializes the application with a specified database
 * and a canvas element from the DOM, and it provides a global reference
 * to the ISearchEngine instance for debugging purposes.
 */

import { ISearchEngine } from "./ISearchEngine.js";

// Global variable to hold the application instance
let app = null;

/**
 * Main function to initialize the ISearchEngine application.
 * 
 * @function main
 */
function main() {
    // Get the canvas element from the DOM by its ID
    const canvas = document.getElementById("canvas");

    // Create an instance of ISearchEngine with a reference to the database file
    app = new ISearchEngine("database.json");
    /**
     * Exposing the application instance globally for debugging purposes.
     * 
     * WARNING: Avoid exposing sensitive objects or data globally in production
     * environments as it can pose security risks.
     */

    window.app = app;
    
    //ALTERAÇOES
    const searchByKeyword = document.getElementById("btn_keyword");
    const colorButtons = document.querySelectorAll(".cores button");
    const clickSound = document.getElementById("click-sound");

    // Initialize the ISearchEngine application with the canvas element
    app.init(canvas).then(() => {


        // Log a success message once the initialization process is complete
        console.log("ISearchEngine Database Initialized...");
        // TODO: Add further application logic or UI updates here if required.
        app.createColorDatabaseLS()

        searchByKeyword.addEventListener("click", function () {
            clickSound.play();
            const categoria = document.querySelector("#Keywords").value;
            console.log(categoria);
            app.searchKeywords(categoria);
            app.gridView(canvas);
        });

        colorButtons.forEach(button => {
            button.addEventListener("click", function () {
                clickSound.play();
                const color = button.id;
                console.log(color);
                app.searchColor(color);
                app.gridView(canvas);
            });
        });

    }).catch(error => {
        // Handle potential errors during the initialization process
        console.error("Error initializing ISearchEngine:", error);
    });
}
// Invoke the main function to start the application
main();
