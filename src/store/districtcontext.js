import React, { useState, useContext, createContext } from 'react';


export const DistrictFetch = createContext()


export const useDistrict = () => useContext(DistrictFetch)