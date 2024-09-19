"use client";
import { builder, Builder } from "@builder.io/react";
import ContactInfo from "./components/ContactInfo";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(ContactInfo, {
  name: "ContactInfo",
});

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(Layout, {
  name: "Layout",
});

Builder.registerComponent(NavBar, {
  name: "NavBar",
});
