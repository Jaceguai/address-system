import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../layout";
import { AddAddressPage, AddressPage, EditAddressPage } from '../pages'



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<AddressPage />} />
      <Route path="/edit/:id" element={<EditAddressPage />} />
      <Route path="/add" element={<AddAddressPage />} />
    </Route>
  )
);
