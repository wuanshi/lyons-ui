import React from "react";
import { render, screen } from '@testing-library/react'
import Button from "./button";

test('a button test', () => {
  render(<Button>nac</Button>)
  const ele = screen.queryByText('nac')
  expect(ele).toBeTruthy()
})