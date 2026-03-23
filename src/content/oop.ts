import { Section } from "./docs";

export const oopSections: Section[] = [
  {
    id: "oop-intro",
    title: "OOP Introduction",
    icon: "Box",
    color: "#10b981",
    gradient: "from-emerald-500/20 to-teal-500/20",
    questions: [
      {
        id: "oop-q1",
        globalIndex: 1,
        sectionIndex: 1,
        title: "Object Oriented Programming",
        text: "Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies the software development and maintenance by providing core concepts like inheritance, encapsulation, abstraction, and polymorphism."
      },
      {
        id: "oop-q2",
        globalIndex: 2,
        sectionIndex: 2,
        title: "Class & Object",
        text: "Fundamental building blocks of OOP:",
        details: [
          "Class: A user-defined data type which defines its properties and its functions. It is the only logical representation of the data. It does not occupy any memory space until an object is instantiated.",
          "Object: A run-time entity and an instance of the class. It can represent a person, place or any other item. An object can operate on both data members and member functions.",
          "Memory Allocation: When created using 'new', space is allocated in heap and address stored in stack. Without 'new', space is not allocated in heap and object contains null value in stack."
        ],
        code: "class student {\npublic:\n  int id;\n  string name;\n  int add(int x, int y) { return x + y; }\n};\n\nstudent s = new student();"
      }
    ]
  },
  {
    id: "inheritance-encapsulation",
    title: "Inheritance & Encapsulation",
    icon: "Layers",
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-indigo-500/20",
    questions: [
      {
        id: "oop-q3",
        globalIndex: 3,
        sectionIndex: 1,
        title: "Inheritance",
        text: "Inheritance is a process in which one object acquires all the properties and behaviors of its parent object automatically. It enables reuse, extension, or modification of attributes and behaviors.",
        details: [
          "Base Class: The class whose members are inherited.",
          "Derived Class: The class which inherits members of another class.",
          "Types: Single (one class inherits another), Multiple (deriving from two or more classes), Hierarchical (deriving more than one class from a base class), Multilevel (deriving from another derived class), Hybrid (combination of others).",
          "Visibility Modes: private, protected, public."
        ]
      },
      {
        id: "oop-q4",
        globalIndex: 4,
        sectionIndex: 2,
        title: "Encapsulation",
        text: "Encapsulation is the process of combining data and functions into a single unit called class. Data is not accessed directly; it is accessed through functions inside the class.",
        details: [
          "Data Hiding: Attributes are kept private and public getter/setter methods are provided. This restricts access and reduces negative effects due to dependencies."
        ]
      }
    ]
  },
  {
    id: "abstraction-polymorphism",
    title: "Abstraction & Polymorphism",
    icon: "Zap",
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-orange-500/20",
    questions: [
      {
        id: "oop-q5",
        globalIndex: 5,
        sectionIndex: 1,
        title: "Abstraction",
        text: "Abstraction is the process of obtaining an abstract view, model or structure of a real life problem, and reducing its unnecessary details.",
        details: [
          "Data binding : Process of binding the application UI and business logic. Changes in logic reflect directly to the UI."
        ]
      },
      {
        id: "oop-q6",
        globalIndex: 6,
        sectionIndex: 2,
        title: "Polymorphism",
        text: "Polymorphism is the ability to present the same interface for differing underlying forms (data types). 'Poly' means many and 'morphism' means forms.",
        details: [
          "Compile Time Polymorphism (Static): Implemented at compile time. Example: Method Overloading.",
          "Runtime Polymorphism (Dynamic): Implemented at runtime. Example: Function Overriding using virtual functions."
        ]
      },
      {
        id: "oop-q7",
        globalIndex: 7,
        sectionIndex: 3,
        title: "Overloading vs Overriding",
        text: "Key differences in polymorphism implementation:",
        details: [
          "Method Overloading: Technique allowing more than one function with same name but different parameters (return type, type of params, number of params).",
          "Function Overriding: Child class contains a method already present in parent class with different definition. Determined at runtime.",
          "Binding: Overloading is static binding; Overriding is dynamic binding."
        ]
      }
    ]
  },
  {
    id: "constructors-destructors",
    title: "Constructors & Destructors",
    icon: "Hammer",
    color: "#f43f5e",
    gradient: "from-rose-500/20 to-pink-500/20",
    questions: [
      {
        id: "oop-q8",
        globalIndex: 8,
        sectionIndex: 1,
        title: "Constructor",
        text: "A special method invoked automatically at the time of object creation to initialize data members. It has the same name as the class.",
        details: [
          "Default constructor: Has no argument.",
          "Parameterized constructor: Has parameters to provide different values to distinct objects.",
          "Copy Constructor: Overloaded constructor used to declare and initialize an object from another object (default and user-defined)."
        ]
      },
      {
        id: "oop-q9",
        globalIndex: 9,
        sectionIndex: 2,
        title: "Destructor",
        text: "Works opposite to constructor; it destructs objects of classes. Defined only once in a class, invoked automatically, and prefixed with a tilde sign (~)."
      }
    ]
  },
  {
    id: "advanced-oop",
    title: "Advanced OOP Concepts",
    icon: "Settings",
    color: "#8b5cf6",
    gradient: "from-violet-500/20 to-purple-500/20",
    questions: [
      {
        id: "oop-q10",
        globalIndex: 10,
        sectionIndex: 1,
        title: "'this' Pointer",
        text: "A keyword that refers to the current instance of the class.",
        details: [
          "Used to pass current object as parameter to another method.",
          "Used to refer to current class instance variable.",
          "Used to declare indexers."
        ]
      },
      {
        id: "oop-q11",
        globalIndex: 11,
        sectionIndex: 2,
        title: "Friend Function",
        text: "A non-member function that acts as a friend of the class and can access its private and protected members.",
        details: [
          "Must be listed in class definition.",
          "Cannot access private members directly; must use object name and dot operator.",
          "Uses objects as arguments."
        ]
      },
      {
        id: "oop-q12",
        globalIndex: 12,
        sectionIndex: 3,
        title: "Aggregation",
        text: "A process in which one class defines another class as an entity reference. It represents a HAS-A relationship and is another way to reuse classes."
      },
      {
        id: "oop-q13",
        globalIndex: 13,
        sectionIndex: 4,
        title: "Virtual Functions",
        text: "Used to replace implementation provided by base class. Redefined by derived class and declared with 'virtual' keyword in base class.",
        details: [
          "Determined at run-time based on type of object pointed by base class pointer.",
          "Cannot be static.",
          "A class can have virtual destructor but not virtual constructor.",
          "Pure Virtual Function: Has no definition in base class, serves as placeholder. Makes the class an Abstract Base Class."
        ]
      },
      {
        id: "oop-q14",
        globalIndex: 14,
        sectionIndex: 5,
        title: "Abstract Classes",
        text: "A class made abstract by declaring at least one function as a pure virtual function (= 0). It cannot be used to declare objects of its own; implementation must be provided by derived classes."
      }
    ]
  },
  {
    id: "namespaces-access",
    title: "Namespaces & Access Control",
    icon: "Shield",
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-blue-500/20",
    questions: [
      {
        id: "oop-q15",
        globalIndex: 15,
        sectionIndex: 1,
        title: "Namespaces",
        text: "A logical division of code designed to stop naming conflicts and define scope for identifiers.",
        details: [
          "Removes ambiguity when different tasks occur with same name.",
          "Standard namespace 'std' contains inbuilt classes and functions."
        ]
      },
      {
        id: "oop-q16",
        globalIndex: 16,
        sectionIndex: 2,
        title: "Access Specifiers",
        text: "Define how functions and variables can be accessed outside the class:",
        details: [
          "Private: Accessible only within the same class.",
          "Public: Accessible from anywhere.",
          "Protected: Accessible within class and child classes (generally used in inheritance)."
        ]
      },
      {
        id: "oop-q17",
        globalIndex: 17,
        sectionIndex: 3,
        title: "Additional OOP Notes",
        text: "Key technical details in C++ OOP:",
        details: [
          "Delete: Used to release a unit of memory; delete[] for an array.",
          "Virtual inheritance: Facilitates creating only one copy of each object if it appears more than once in hierarchy.",
          "Operator overloading: Standard operators can be redefined for class instances."
        ]
      }
    ]
  }
];
