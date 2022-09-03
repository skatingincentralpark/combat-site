import styled from "@emotion/styled";

const CombatLogo = () => {
  const drawnPaths = [
    "M13.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M19.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M13.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M25.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M25.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M19.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M1.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M1.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M7.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M1.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M7.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M49.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M55.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M61.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M61.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M55.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M37.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M61.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M37.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M43.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M37.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M43.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M49.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M85.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M85.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M85.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M91.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M97.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M97.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M97.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M97.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M85.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M73.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M73.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M85.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M73.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M79.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M73.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M73.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M121.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M127.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M121.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M127.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M133.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M133.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M133.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M115.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M115.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M109.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M109.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M109.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M109.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M109.57,0c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M109.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M169.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M163.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M169.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M169.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M169.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M145.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M163.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M151.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M151.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M151.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M157.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M157.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M157.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M205.57,9.14c.47,0,.85-.15,1.14-.43,.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43s-.85,.15-1.14,.43c-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43Z",
    "M199.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M193.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M199.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M205.57,30c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M193.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M187.57,24c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M181.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M187.57,18c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M187.57,0c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M187.57,12c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
    "M187.57,6c-.47,0-.85,.15-1.14,.43-.29,.29-.43,.67-.43,1.14s.15,.85,.43,1.14c.29,.29,.67,.43,1.14,.43s.85-.15,1.14-.43c.29-.29,.43-.67,.43-1.14s-.15-.85-.43-1.14c-.29-.29-.67-.43-1.14-.43Z",
  ];

  return (
    <Svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 207.14 33.14"
    >
      <g id="Borders">
        {drawnPaths.map((d, i) => (
          <Path d={d} key={i} delay={i} />
        ))}
      </g>
    </Svg>
  );
};

export default CombatLogo;

const Svg = styled.svg`
  width: 18rem;
`;

const Path = styled.path<{ delay: number }>`
  transition: fill 0.25s;
  animation: color-change 1.5s infinite;
  animation-delay: ${({ delay }) => `${delay * 0.1}s`};

  @keyframes color-change {
    0% {
      fill: var(--green-2);
    }
    15% {
      fill: var(--green-3);
    }
    25% {
      fill: var(--yellow-1);
    }
    50% {
      fill: orange;
    }
    75% {
      fill: var(--olive-1);
    }
    100% {
      fill: var(--green-2);
    }
  }
`;