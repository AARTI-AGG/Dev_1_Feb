const fs= require('fs');
const path=require("path");

const downloadsPath="./Downloads";


let contentOfDownloads=fs.readdirSync(downloadsPath);

//console.log(contentOfDownloads);
//looping over the contents
for(let i=0 ; i<contentOfDownloads.length ; i++){
    sortFolder(contentOfDownloads[i]);
}
//checking folder
function checkFolder(ext){
    if(ext == "doc" || ext == "pdf" || ext == "txt"){
        // check Documents Folder
        //"./Downloads/Documents"
        let folderPath = downloadsPath+"/Documents"
        return fs.existsSync(folderPath);
    }
    else if(ext == "jpeg" || ext == "jpg" || ext == "png"){
        // check Images
        let folderPath = downloadsPath+"/Images"
        return fs.existsSync(folderPath);
    }
    else if(ext == "mkv" || ext == "mp4"){
        // check Videos
        let folderPath = downloadsPath+"/Videos"
        return fs.existsSync(folderPath);
    }
}

//creating folder
function createFolder(ext){
    //console.log("inside createFolder");
    if(ext == "doc" || ext == "pdf" || ext == "txt"){
        let folderPath = downloadsPath+"/Documents"
        console.log(folderPath);
        fs.mkdirSync(folderPath); //making folder
    }
    else if(ext == "jpeg" || ext == "jpg" || ext == "png"){
        let folderPath = downloadsPath+"/Images"
        fs.mkdirSync(folderPath);
    }
    else if(ext == "mkv" || ext == "mp4"){
        let folderPath = downloadsPath+"/Videos"
        fs.mkdirSync(folderPath);
    }
}

//copying file to the respective folder
function moveFile(file , ext){
    if(ext == "doc" || ext == "pdf" || ext == "txt"){

        //String interpolation `${}`
        let sourceFile = `${downloadsPath}/${file}`; //source path
        let destinationFile = `${downloadsPath}/Documents/${file}`;//destination path
        fs.copyFileSync( sourceFile  , destinationFile ); //copying file
        fs.unlinkSync(sourceFile);// deleting source file
    }
    else if(ext == "jpeg" || ext == "jpg" || ext == "png"){
        let sourceFile = `${downloadsPath}/${file}`;
        let destinationFile = `${downloadsPath}/Images/${file}`;
        fs.copyFileSync( sourceFile  , destinationFile );
        fs.unlinkSync(sourceFile);
    }
    else if(ext == "mkv" || ext == "mp4"){
        let sourceFile = `${downloadsPath}/${file}`;
        let destinationFile = `${downloadsPath}/Videos/${file}`;
        fs.copyFileSync( sourceFile  , destinationFile );
        fs.unlinkSync(sourceFile);
    }
}


function sortFolder(file){
    // .jpg , .mp4 , .mkv , .vid
    //  getExtensionName => extension
    // extension => .doc
    let extension = path.extname(file).substring(1); //it will take from after '.'

    let isFolderExist = checkFolder(extension);
    if(isFolderExist){ 
        moveFile(file , extension);
    }
    else{
        createFolder(extension);
        moveFile(file , extension);
    }
}
