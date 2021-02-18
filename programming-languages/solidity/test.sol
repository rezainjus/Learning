pragma solidity >=0.5.16;
contract MyFirstContract {
    string private name;
    function setName(string newName) public {
        name = newName;
    }

    function getName() public returns (string) {
        return name;
    }
}