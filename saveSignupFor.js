var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
var fso = new ActiveObject("Scripting.FIleSystemObject");
var FILENAME = 'credintials.xml';

function SaveXML(UserData) {
    var file = fso.CreateTextFile(FILENAME, true);
    file.WriteLine('<?xml version="1.0" encoding="utf-8"?>\n');
    file.WriteLine('<PersonInfo>\n');

    for (countr = 0; countr < UserData.length; countr++) {
        file.Write('    <Person ');
        file.Write('Pswd="' + UserData[countr][0] + '" ');
        file.Write('PersonID="' + UserData[countr][1] + '" ');
        file.Write('Name="' + UserData[countr][2] + '" ');
        file.WriteLine('></Person>\n');
    } // end for countr

    file.WriteLine('</PersonInfo>\n');
    file.Close();

} // end SaveXML function --------------------

function LoadXML(xmlFile) {
    xmlDoc.load(xmlFile);
    return xmlDoc.documentElement;
} //end function LoadXML()

function initialize_array() {
    var person = new Array();
    var noFile = true;
    var xmlObj;
    if (fso.FileExists(FILENAME)) {
        xmlObj = LoadXML(FILENAME);
        noFile = false;
    } // if
    else {
        xmlObj = LoadXML("PersonXML.xml");
        //alert("local" + xmlObj);
    } // end if

    var usrCount = 0;
    while (usrCount < xmlObj.childNodes.length) {
        var tmpUsrs = new Array(xmlObj.childNodes(usrCount).getAttribute("Usrname"),
            xmlObj.childNodes(usrCount).getAttribute("Pswd"),
            xmlObj.childNodes(usrCount).getAttribute("PersonID"),
            xmlObj.childNodes(usrCount).getAttribute("Name"));
        person.push(tmpUsrs);
        usrCount++;
    } //end while
    if (noFile === false)
        fso.DeleteFile(FILENAME);
    SaveXML(person);
} // end function initialize_array()