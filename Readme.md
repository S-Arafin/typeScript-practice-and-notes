# TypeScript Basics & Reference Guide

## Overview

A comprehensive collection of notes, code snippets, and core concepts for mastering TypeScript. This repository serves as a systematic reference for transitioning from standard JavaScript to strongly-typed, enterprise-grade architecture. 

Building robust applications requires a structured approach. I do not rely on motivation; I rely on discipline. TypeScript is the embodiment of that discipline at the codebase level, catching errors at compile-time and enforcing a rigorous, predictable architecture.

## Repository Structure & Topics Covered

The `src` directory contains isolated, focused files demonstrating specific TypeScript features and Object-Oriented Programming (OOP) principles:

```text
src/
├── accessModifier.ts        # Public, private, and protected modifiers
├── asConst.ts               # Const assertions for strict literal types
├── Class.ts                 # Object-oriented class structures
├── conditionalType.ts       # Type relationships and conditional logic
├── constraint.ts            # Enforcing constraints on generic types
├── destructuring.ts         # Typing destructured arrays and objects
├── encapsulation.ts         # Data hiding and encapsulation patterns
├── enum.ts                  # Numeric and string enumerations
├── function.ts              # Typing parameters and return values
├── functionWithGeneric.ts   # Building reusable generic functions
├── generics.ts              # Core generic type concepts
├── genericWithInterface.ts  # Combining interfaces with generics
├── getterandsetter.ts       # Class accessors (get/set)
├── Inheritance.ts           # Extending classes and inheritance chains
├── instanceOf.ts            # Type narrowing using the instanceof operator
├── interface.ts             # Defining object shapes and strict contracts
├── keyOfConstrain.ts        # Dynamic type mapping with the keyof operator
├── mappedtype.ts            # Transforming existing types into new types
├── nonPrimitive.ts          # Objects, arrays, and tuples
├── polymorphism.ts          # Polymorphic behavior in classes
├── premitive.ts             # Core types: string, number, boolean, etc.
├── premitivets.ts           # Additional primitive type operations
├── spreadAndRest.ts         # Typing spread operators and rest parameters
├── static.ts                # Static properties and methods in classes
├── test.ts                  # Scratchpad for testing configurations
├── typeAlias.ts             # Creating custom type definitions
├── typeGuard.ts             # Narrowing types with custom guard functions
├── unisex.ts                # Miscellaneous/custom type implementations
└── utility.ts               # Built-in utility types (Partial, Pick, Omit, etc.)