import axios from "axios"
import ***REMOVED*** VendorInfo, VendorProductInfo ***REMOVED*** from "./vendor.type";
import ***REMOVED*** ContractData ***REMOVED*** from "./contract.type";

const BASE_URL = 'http://localhost:8080/api';

export const vendorSignup = async (data: VendorInfo): Promise<void> => ***REMOVED***
  const response = await axios (***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/vendors`,
    data: data
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

export const registerProduct = async (data: VendorProductInfo): Promise<void> => ***REMOVED***
  const response = await axios (***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/products`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***,
    data: data
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

export const vendorContract = async (userId: string, data: ContractData): Promise<void> => ***REMOVED***
  const response = await axios (***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/products/contracts/$***REMOVED***userId***REMOVED***`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***,
    data: data
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;