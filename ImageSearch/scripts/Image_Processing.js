/**
 * Represents a Picture object for displaying and processing image data.
 */
class Picture {
    /**
     * Creates a new Picture instance.
     * @param {number} px - X-coordinate of the picture.
     * @param {number} py - Y-coordinate of the picture.
     * @param {number} w - Width of the picture.
     * @param {number} h - Height of the picture.
     * @param {string} impath - Path to the image file.
     * @param {string} cat - Category of the picture.
     */
    constructor(px, py, w, h, impath, cat) {
        // Initialize picture properties
        this.posx = px; // X-coordinate of the top-left corner of the picture
        this.posy = py; // Y-coordinate of the top-left corner of the picture
        this.w = w;     // Width of the picture in pixels
        this.h = h;     // Height of the picture in pixels
        this.impath = impath; // Path to the image file
        this.imgobj = new Image(); // Creates an Image object to handle the picture's image
        this.imgobj.src = this.impath; // Set the image source to the given path
        this.original_w = this.imgobj.width; // Stores the original width of the image
        this.original_h = this.imgobj.height; // Stores the original height of the image
        this.category = cat; // Category for organizational or filtering purposes
        this.hist = []; // Histogram data for color analysis
        this.color_moments = []; // Color moments data for advanced image processing
        this.manhattanDist = []; // Stores Manhattan distance data for image comparisons
    }

    /**
     * Draws the picture on a specified canvas.
     * @param {HTMLCanvasElement} cnv - The canvas element to draw on.
     */
    draw(cnv) {
        const ctx = cnv.getContext("2d"); // Get the drawing context of the canvas

        // Define the drawing function
        const draw = () => {
            ctx.drawImage(this.imgobj, this.posx, this.posy, this.w, this.h);
        };

        // Check if the image is already loaded
        if (this.imgobj.complete) {
            console.log("Draw >> N Time"); // Log repeated drawing attempts
            draw();
        } else {
            console.log("Draw >> First Time"); // Log the first drawing attempt
            this.imgobj.addEventListener('load', draw); // Wait for the image to load before drawing
        }
    }

    /**
     * Performs computations on the image and updates related data structures.
     * @param {HTMLCanvasElement} cnv - Canvas for processing the image.
     * @param {ColorHistogram} histcol - Instance of ColorHistogram for histogram calculations.
     * @param {ColorMoments} colorMom - Instance of ColorMoments for moment calculations.
     * @param {Event} eventP - Event to dispatch after computations are complete.
     */
    computation(cnv, histcol, colorMom, eventP) {
        const ctx = cnv.getContext("2d");

        // Define the computation logic
        const compute = () => {
            // Draw the full-size image on the canvas for pixel access
            ctx.drawImage(this.imgobj, 0, 0, this.imgobj.width, this.imgobj.height);

            // Extract image pixel data
            const pixels = ctx.getImageData(0, 0, this.imgobj.width, this.imgobj.height);

            // Calculate histogram data using the provided ColorHistogram instance
            this.hist = histcol.countPixels(pixels);
            console.log("Histogram: ", this.hist);

            // Debugging: Display histogram data on the canvas
            //this.displayHistogram(cnv, this.hist, histcol.redColor, histcol.greenColor, histcol.blueColor);

            // TODO: Uncomment and complete color moments calculation
            // this.color_moments = colorMom.moments(pixels);

            // Dispatch the provided event to signal completion
            dispatchEvent(eventP);
        };

        // Check if the image is already loaded
        if (this.imgobj.complete) {
            console.log("Computation >> N Time");
            compute();
        } else {
            console.log("Computation >> First Time");
            this.imgobj.addEventListener('load', compute);
        }

        // TODO: Complete this method as per requirements
    }

    /**
     * Displays the histogram data on the canvas.
     * @param {HTMLCanvasElement} cnv - Canvas for displaying histogram data.
     * @param {number[]} hist - Histogram data array.
     * @param {number[]} redColor - Array of red color components.
     * @param {number[]} greenColor - Array of green color components.
     * @param {number[]} blueColor - Array of blue color components.
     */
    displayHistogram(cnv, hist, redColor, greenColor, blueColor) {
        const ctx = cnv.getContext("2d", { willReadFrequently: true });
        const text_y = 390; // Y-coordinate for text display
        const rect_y = 400; // Y-coordinate for color rectangles
        const hor_space = 80; // Horizontal space between elements

        // Display each color and corresponding pixel count
        ctx.font = "12px Arial";
        for (let c = 0; c < redColor.length; c++) {
            ctx.fillStyle = `rgb(${redColor[c]}, ${greenColor[c]}, ${blueColor[c]})`;
            ctx.fillRect(c * hor_space, rect_y, 50, 50); // Draw color rectangle
            if (c === 8) {
                ctx.fillStyle = "black"; // Use black for contrast
            }
            ctx.fillText(hist[c], c * hor_space, text_y); // Display pixel count
        }
    }

    /**
     * Sets the position of the picture on the canvas.
     * @param {number} px - New X-coordinate for the picture.
     * @param {number} py - New Y-coordinate for the picture.
     */
    setPosition(px, py) {
        this.posx = px;
        this.posy = py;
    }

    /**
     * Determines if the mouse cursor is over the picture.
     * @param {number} mx - X-coordinate of the mouse cursor.
     * @param {number} my - Y-coordinate of the mouse cursor.
     * @returns {boolean} True if the cursor is over the picture, false otherwise.
     */
    mouseOver(mx, my) {
        return (
            mx >= this.posx &&
            mx <= this.posx + this.w &&
            my >= this.posy &&
            my <= this.posy + this.h
        );
    }
}

// Represents a ColorHistogram object that processes and analyzes color data in an image
class ColorHistogram {
    /**
     * Creates a new ColorHistogram instance.
     * @param {number[]} redColor - Array of red channel values.
     * @param {number[]} greenColor - Array of green channel values.
     * @param {number[]} blueColor - Array of blue channel values.
     */
    constructor(redColor, greenColor, blueColor) {
        this.redColor = redColor; // Red channel data
        this.greenColor = greenColor; // Green channel data
        this.blueColor = blueColor; // Blue channel data
        // Combine the individual color channels into an array of [R, G, B] triplets
        this.colors = this.redColor.map((_, i) => [this.redColor[i], this.greenColor[i], this.blueColor[i]]);
    }

    /**
     * Counts the number of pixels corresponding to defined color categories.
     * @param {ImageData} pixels - Image data containing the color information for the image.
     * @returns {number[]} - Histogram data representing pixel counts for each color category.
     */
    countPixels(pixels) {
        const hist = new Array(12).fill(0); // Initialize histogram with 12 bins, set to zero

        // TODO: Implement logic to count pixels for each category based on the defined color distances.

        //Cores do enunciado - foram passadas para rgb com o site https://www.w3schools.com/colors/colors_converter.asp
        //fornecido pelo docente
        const colorCategories = [
            { r: 205, g: 9, b: 12 },    // vermelho escuro #CD090C
            { r: 252, g: 148, b: 15 },  // laranja #FC940F
            { r: 255, g: 255, b: 6 },   // amarelo  #FFFF06
            { r: 47, g: 204, b: 21 },   // verde #2FCC15
            { r: 44, g: 193, b: 198 },  // azul turquesa #2CC1C6
            { r: 3, g: 21, b: 255 },    // azul intenso #0315FF
            { r: 118, g: 44, b: 168 },  // roxo #762CA8
            { r: 252, g: 152, b: 191 }, // rosa #FC98BF
            { r: 255, g: 255, b: 255 }, // branco #FFFFFF
            { r: 153, g: 153, b: 153 }, // cinzento #999999
            { r: 0, g: 0, b: 0 },       // preto #000000
            { r: 136, g: 84, b: 29 }    // castanho escuro #88541D
        ];

        const limiarGlobal = 100; // distancia aceitavel global
        const limiarCanal = 80;   // distancia aceitavel para cada canal de cor

        //itera por cada pixel
        for (let i = 0; i < pixels.data.length; i += 4) {
            const r = pixels.data[i];
            const g = pixels.data[i + 1];
            const b = pixels.data[i + 2];

            let minDistance = 100000;  //valor alto para garantir que a distância real é menor
            let closestCategory = -1; //nenhuma categoria
            
            // encontrar a categoria de cor mais próxima com a distância de Manhattan
            for (let j = 0; j < colorCategories.length; j++) {
                const category = colorCategories[j];
                const distance = Math.abs(r - category.r) + Math.abs(g - category.g) + Math.abs(b - category.b); //Distância de Manhattan

                if (distance < minDistance) {
                    minDistance = distance;
                    closestCategory = j;
                }
            }

            // verificar se a distância é menor que o limiar global e os canais de cor estão dentro do limiar de canal
            if (minDistance < limiarGlobal &&
                Math.abs(r - colorCategories[closestCategory].r) < limiarCanal &&
                Math.abs(g - colorCategories[closestCategory].g) < limiarCanal &&
                Math.abs(b - colorCategories[closestCategory].b) < limiarCanal) {
                //incrementar o histograma para a categoria mais próxima
                hist[closestCategory]++;
            }
        }       

        return hist; // Return the histogram data
    }
}

// Represents a ColorMoments object for computing statistical color descriptors
class ColorMoments {
    /**
     * Constructs a ColorMoments object.
     */
    constructor() {
        this.h_block = 3; // Horizontal division for the image grid
        this.v_block = 3; // Vertical division for the image grid
    }

    /**
     * Converts RGB color values to HSV (Hue, Saturation, Value).
     * @param {number} rc - Red channel value (0-255).
     * @param {number} gc - Green channel value (0-255).
     * @param {number} bc - Blue channel value (0-255).
     * @returns {number[]} - HSV values: [Hue (0-1), Saturation (0-1), Value (0-1)].
     */
    rgbToHsv(rc, gc, bc) {
        let r = rc / 255;
        let g = gc / 255;
        let b = bc / 255;

        let max = Math.max(r, g, b); // Maximum value among R, G, B
        let min = Math.min(r, g, b); // Minimum value among R, G, B
        let h, s, v = max; // Value (brightness) is the max of RGB

        let dif = max - min;
        s = max === 0 ? 0 : dif / max; // Saturation is zero if the max is zero, otherwise ratio of diff to max

        if (max === min) {
            h = 0; // Hue is undefined if all RGB values are equal
        } else {
            switch (max) {
                case r:
                    h = (g - b) / dif + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / dif + 2;
                    break;
                case b:
                    h = (r - g) / dif + 4;
                    break;
            }
            h /= 6; // Normalize hue to range [0, 1]
        }
        return [h, s, v]; // Return HSV values
    }

    /**
     * Calculates statistical moments (mean, variance, skewness) for color data in image regions.
     * @param {ImageData} imageData - Image data containing pixel color information.
     * @returns {number[]} - Array of color moment descriptors for the image.
     */
    moments(imageData) {
        // Calculate dimensions for dividing the image into blocks
        const wBlock = Math.floor(imageData.width / this.h_block);
        const hBlock = Math.floor(imageData.height / this.v_block);

        const descriptor = []; // Placeholder for storing the calculated moments

        // TODO: Implement logic for dividing the image into blocks and calculating moments.

        return descriptor; // Return the array of descriptors
    }
}

export { Picture, ColorHistogram, ColorMoments }