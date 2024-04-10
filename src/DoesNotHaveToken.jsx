import React from 'react'
import { Alert } from "@material-tailwind/react";

export const DoesNotHaveToken = () => {
  return <Alert color="red">Boo, We don't have a token for Spotify!</Alert>;
}