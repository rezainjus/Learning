pragma solidity ^0.6.8;

contract Variables {
    int signed = 0;
    uint unsigned = 0;
    string stringas = "Hello World!";
    bool condition = false;
    address myAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    // Comment
    
    /*
        Multiline Comments
    */
    
    // State value 
    
    string value = 'Value';
    function localV() pure public {
        string memory s = 'H1';
    }

}