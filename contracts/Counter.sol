pragma solidity ^0.5.0;

contract Counter {
  uint256 public value;

  event Increased(uint256 new Value);

  function increase() public {
    value = value + 1;
    emit Increased(value);
  }
}