import styled from "@emotion/styled";

const SuperhighwayLogo = ({ isLoading }: { isLoading: boolean }) => {
  // 0 0 352.73 38.15
  const drawnPaths2 = [
    "M17.73,30.4c.3,.29,.45,.68,.45,1.15s-.15,.86-.45,1.15c-.29,.3-.68,.45-1.15,.45s-.86-.15-1.15-.45c-.3-.3-.45-.69-.45-1.15s.15-.86,.45-1.15c.59-.59,1.72-.59,2.3,0Zm-2.3-9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm-4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm0,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm19.97-9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm39.95-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-4.99,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm64.91,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45,.45-.68,.45-1.15-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm39.95-9.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm4.99,4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm14.98-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm44.94,19.97c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-9.99-19.97c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm9.99,14.98c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm-4.99-9.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm34.95,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm0-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Z",
    "M107.61,20.41c.3,.29,.45,.68,.45,1.15s-.15,.86-.45,1.15c-.29,.3-.68,.45-1.15,.45s-.86-.15-1.15-.45c-.3-.3-.45-.69-.45-1.15s.15-.86,.45-1.15c.6-.6,1.72-.59,2.3,0Zm2.69,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm39.95-9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15,.68,.45,1.15,.45,.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm39.95,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm0-9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45,.45-.68,.45-1.15-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-9.99,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15,.68,.45,1.15,.45,.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm44.94,14.98c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm29.96-24.97c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm-14.98,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm39.95,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm24.97,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm0,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Z",
    "M22.72,25.41c.3,.29,.45,.68,.45,1.15s-.15,.86-.45,1.15c-.29,.3-.68,.45-1.15,.45s-.86-.15-1.15-.45c-.3-.3-.45-.69-.45-1.15s.15-.86,.45-1.15c.6-.59,1.72-.59,2.3,0ZM.45,30.4c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm0-9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm54.92,14.98c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm44.94,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm44.94-14.98c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm39.95,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45,.45-.68,.45-1.15-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-9.99,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm9.99-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45,.45-.68,.45-1.15-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-4.99,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm24.97-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45,.45-.68,.45-1.15-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm0,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm29.96-24.97c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-4.99,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm44.94,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm0-9.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm0,4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-19.97,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15,.68,.45,1.15,.45,.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm34.95-14.98c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Z",
    "M52.68,10.43c.3,.29,.45,.68,.45,1.15s-.15,.86-.45,1.15c-.29,.3-.68,.45-1.15,.45s-.86-.15-1.15-.45c-.3-.3-.45-.68-.45-1.15s.15-.86,.45-1.15c.59-.6,1.72-.59,2.3,0Zm-22.28,14.98c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm44.94-14.98c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm-9.99,19.97c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99-19.97c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15,.68,.45,1.15,.45,.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm39.95,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm4.99,0c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm-9.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm44.94,0c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm-4.99,0c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm-9.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15,.68,.45,1.15,.45,.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm39.95,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm9.99,19.97c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm59.92-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm-14.98,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm44.94,14.98c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm14.98,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm24.97-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm29.96,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0-14.98c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Z",
    "M12.74,10.43c.3,.29,.45,.68,.45,1.15s-.15,.86-.45,1.15c-.29,.29-.69,.45-1.15,.45s-.86-.15-1.15-.45c-.29-.29-.45-.68-.45-1.15s.15-.86,.45-1.15c.59-.59,1.72-.59,2.3,0Zm7.68,0c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm-4.99,0c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0ZM.45,15.42c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm4.99-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0ZM50.38,30.4c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99,0c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm44.94-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0-9.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm29.96-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-19.97,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm59.92,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm49.93,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm19.97,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm24.97-9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm49.93-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45,.45-.68,.45-1.15-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm39.95,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm-9.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm0,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm34.95-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-4.99,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm0-9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Z",
    "M52.68,15.42c.3,.29,.45,.68,.45,1.15s-.15,.86-.45,1.15c-.29,.3-.68,.45-1.15,.45s-.86-.15-1.15-.45c-.3-.3-.45-.69-.45-1.15s.15-.86,.45-1.15c.59-.59,1.72-.59,2.3,0Zm-2.3,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0ZM30.41,10.43c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15,.68,.45,1.15,.45,.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm39.95,19.97c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-14.98-14.98c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm39.95,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm4.99,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-4.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm34.95,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm-9.99,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm4.99-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm84.88-14.98c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm29.96-14.98c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15,.68,.45,1.15,.45,.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm39.95,0c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm0,4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.29,.3,.68,.45,1.15,.45s.86-.15,1.15-.45,.45-.68,.45-1.15-.15-.86-.45-1.15c-.59-.59-1.72-.59-2.3,0Zm39.95,0c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm-4.99-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm34.95,9.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0Zm0-4.99c-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.3,0Zm1.15-2.24c.47,0,.86-.15,1.15-.45,.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.6-2.3,0-.29,.29-.45,.69-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45Zm-21.13,2.24c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15c.3,.3,.68,.45,1.15,.45s.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Zm0-4.99c-.3,.3-.45,.68-.45,1.15s.15,.86,.45,1.15,.68,.45,1.15,.45,.86-.15,1.15-.45c.3-.3,.45-.68,.45-1.15s-.15-.86-.45-1.15c-.59-.59-1.71-.59-2.31,0Z",
  ];
  // 0 0 250.33 37.19
  const drawnPaths3 = [
    "M15.63,15.02h-2.55c0-3.17-1.97-4.94-5.31-4.94-2.88,0-4.73,1.36-4.73,3.46,0,2.55,1.65,2.88,5.27,3.74,3.91,.9,7.94,1.73,7.94,6.46,0,3.62-3.04,6.09-7.82,6.09C3.17,29.83,.08,27.11,0,22.26H2.59c0,3.41,2.14,5.35,5.84,5.35,3.13,0,5.27-1.48,5.27-3.7,0-2.76-1.81-3.25-6.21-4.28-3.5-.82-6.99-1.52-6.99-5.88,0-3.54,3-5.88,7.28-5.88,4.94,0,7.82,2.59,7.86,7.16Z",
    "M21.23,21.1V8.39h2.55v12.59c0,4.94,2.02,6.54,5.35,6.54s6.09-2.34,6.09-6.75V8.39h2.55V29.29h-2.51v-2.84h-.08c-1.23,1.97-3.62,3.29-6.5,3.29-4.77,0-7.45-2.88-7.45-8.64Z",
    "M62.61,18.8c0,6.66-3.41,10.94-8.8,10.94-3,0-5.51-1.44-6.58-3.62h-.08v10.78h-2.55V8.39h2.55v3.09h.08c1.07-2.14,3.58-3.62,6.58-3.62,5.39,0,8.8,4.28,8.8,10.94Zm-15.59,0c0,5.35,2.51,8.8,6.38,8.8s6.54-3.46,6.54-8.8-2.55-8.8-6.54-8.8-6.38,3.46-6.38,8.8Z",
    "M82.4,23.08h2.63c-.66,3.58-3.58,6.75-8.84,6.75-5.96,0-9.54-4.44-9.54-11.35,0-6.17,3.5-10.61,9.38-10.61,4.69,0,7.94,2.84,8.84,7.45,.25,1.11,.33,2.51,.33,4.03h-15.96c.12,5.55,3.09,8.31,6.95,8.31,3.42,0,5.6-1.89,6.21-4.57Zm-13.12-5.84h13.45c-.29-4.65-2.96-7.2-6.71-7.2s-6.5,2.71-6.75,7.2Z",
    "M100.79,8.35v2.43c-.33-.04-.86-.08-1.32-.08-4.16,0-6.5,2.71-6.5,7.57v11.03h-2.55V8.39h2.51v3.29h.08c1.4-2.26,3.62-3.46,6.38-3.46,.45,0,.99,.04,1.4,.12Z",
    "M107.33,11.19c1.44-2.22,3.91-3.25,6.46-3.25,4.81,0,7.45,2.88,7.45,8.64v12.71h-2.55v-12.59c0-4.94-2.02-6.54-5.35-6.54s-6.09,2.34-6.09,6.75v12.38h-2.55V0h2.55V11.19h.08Z",
    "M127.86,3.62V0h2.55V3.62h-2.55Zm0,25.67V8.39h2.55V29.29h-2.55Z",
    "M151.02,11.52h.08v-3.13h2.55V28.01c0,6.05-3.04,9.17-8.76,9.17-5.18,0-8.35-2.47-8.39-6.58h2.59c.08,2.84,2.3,4.44,5.8,4.44,4.24,0,6.21-2.26,6.21-7.16v-2.47h-.08c-1.4,2.34-3.7,3.66-6.42,3.66-5.47,0-8.97-4.2-8.97-10.61s3.5-10.61,8.97-10.61c2.76,0,5.02,1.28,6.42,3.66Zm-12.71,6.95c0,5.1,2.47,8.43,6.38,8.43s6.54-3.21,6.54-8.43-2.47-8.43-6.54-8.43-6.38,3.33-6.38,8.43Z",
    "M163.12,11.19c1.44-2.22,3.91-3.25,6.46-3.25,4.81,0,7.45,2.88,7.45,8.64v12.71h-2.55v-12.59c0-4.94-2.02-6.54-5.35-6.54s-6.09,2.34-6.09,6.75v12.38h-2.55V0h2.55V11.19h.08Z",
    "M200.43,29.29l-2.71-9.46c-.91-3.08-1.77-6.05-2.63-9.13h-.08c-.86,3.08-1.73,6.05-2.63,9.13l-2.71,9.46h-3.66l-6.05-20.9h2.63l2.55,9.05c.9,3.13,1.81,6.42,2.67,9.54h.08l2.59-9.26,2.63-9.34h3.87l2.63,9.34,2.59,9.26h.08c.86-3.13,1.77-6.42,2.67-9.54l2.55-9.05h2.63l-6.05,20.9h-3.66Z",
    "M228.78,15.88v8.27c0,2.14,.21,3.95,.45,5.14h-2.39c-.21-.99-.29-2.22-.29-3.17h-.08c-1.36,2.26-3.79,3.58-7.45,3.58-4.28,0-7.08-2.51-7.08-6.01s1.93-5.47,7.94-6.42c1.93-.33,4.57-.62,6.42-.74v-.99c0-3.91-2.22-5.51-5.35-5.51-3.54,0-5.31,1.93-5.47,4.65h-2.67c.25-3.91,3.09-6.83,8.15-6.83,4.69,0,7.82,2.51,7.82,8.02Zm-2.47,2.8c-1.77,.12-4.32,.45-6.09,.74-4.2,.62-5.55,1.81-5.55,4.11,0,2.43,1.81,4.03,4.9,4.03,1.93,0,3.66-.66,4.81-1.85,1.4-1.48,1.93-2.63,1.93-5.43v-1.6Z",
    "M241.69,30.28c-2.18,5.43-3.99,6.79-8.06,6.79-.54,0-1.07-.04-1.52-.17v-2.26c.45,.12,.99,.17,1.48,.17,3.04,0,4.07-.99,5.8-5.51l-8.23-20.9h2.76l6.79,17.65h.08l6.79-17.65h2.76l-8.64,21.89Z",
  ];

  return (
    <>
      <SvgFast
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352.73 38.15"
        isLoading={isLoading}
      >
        <g id="Borders">
          {drawnPaths2.map((d, i) => (
            <Path d={d} key={i} style={{ ["--delay" as any]: i }} fast />
          ))}
        </g>
      </SvgFast>
      <Svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352.73 38.15"
        isLoading={isLoading}
      >
        <g id="Borders">
          {drawnPaths2.map((d, i) => (
            <Path d={d} key={i} style={{ ["--delay" as any]: i }} />
          ))}
        </g>
      </Svg>
    </>
  );
};

export default SuperhighwayLogo;

const Svg = styled.svg<{ isLoading: boolean }>`
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: opacity 500ms;
  height: 100%;
`;
const SvgFast = styled.svg<{ isLoading: boolean }>`
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  transition: opacity 500ms;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--gap-s) var(--gap-xl);
`;

const Path = styled.path<{ fast?: boolean }>`
  fill: #000;
  animation: ${({ fast }) =>
    fast ? `FairyBreadBiatch2 infinite` : `FairyBreadBiatch infinite`};
  animation-duration: ${({ fast }) => (fast ? `1000ms` : `1500ms`)};
  animation-delay: calc(var(--delay) * 0.1s);

  @keyframes FairyBreadBiatch {
    0% {
      fill: var(--yellow-1);
    }
    15% {
      fill: var(--yellow-1);
    }
    25% {
      fill: var(--yellow-1);
    }
    50% {
      fill: #000;
    }
    75% {
      fill: var(--piss-1);
    }
    100% {
      fill: var(--green-1);
    }
  }

  @keyframes FairyBreadBiatch2 {
    0% {
      fill: white;
    }
    15% {
      fill: #3d315b;
    }
    25% {
      fill: red;
    }
    50% {
      fill: #212c23;
    }
    75% {
      fill: #2e3923;
    }
    100% {
      fill: #2e2f23;
    }
  }
`;
