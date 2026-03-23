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
      },
      {
        id: "oop-q15",
        globalIndex: 15,
        sectionIndex: 6,
        title: "Interface",
        text: "An interface is a blueprint of a class. It has static constants and abstract methods. It is used to achieve fully abstraction and multiple inheritance in Java.",
        details: [
          "Abstract Class vs Interface: Abstract class can have abstract and non-abstract methods, whereas interface has only abstract methods (until Java 8). Abstract class doesn't support multiple inheritance, but interface does. Abstract class can have final, non-final, static and non-static variables, whereas interface has only static and final variables."
        ]
      },
      {
        id: "oop-q16",
        globalIndex: 16,
        sectionIndex: 7,
        title: "Inline Function",
        text: "An inline function is a function that is expanded in line when it is called. When the inline function is called whole code of the inline function gets inserted or substituted at the point of inline function call. This substitution is performed by the C++ compiler at compile time."
      },
      {
        id: "oop-q17",
        globalIndex: 17,
        sectionIndex: 8,
        title: "Important Keywords",
        text: "Keywords used to define specific behaviors in OOP:",
        details: [
          "Static Keyword: Used for memory management. It can be applied to variables, methods, blocks, and nested classes. The static keyword belongs to the class than an instance of the class.",
          "Final Keyword: Used to restrict the user. It can be used in many contexts: final variable (cannot change value), final method (cannot be overridden), final class (cannot be inherited).",
          "Super Keyword: A reference variable which is used to refer immediate parent class object."
        ]
      },
      {
        id: "oop-q18",
        globalIndex: 18,
        sectionIndex: 9,
        title: "Exception Handling",
        text: "The Exception Handling in Java is one of the powerful mechanism to handle the runtime errors so that normal flow of the application can be maintained.",
        details: [
          "try: The \"try\" keyword is used to specify a block where we should place exception code.",
          "catch: The \"catch\" block is used to handle the exception.",
          "finally: The \"finally\" block is used to execute the important code of the program. It is executed whether an exception is handled or not.",
          "throw: The \"throw\" keyword is used to throw an exception.",
          "throws: The \"throws\" keyword is used to declare exceptions."
        ]
      },
      {
        id: "oop-q19",
        globalIndex: 19,
        sectionIndex: 10,
        title: "Memory Management",
        text: "Concepts related to memory in OOP:",
        details: [
          "Garbage Collection: The process of reclaiming the runtime unused memory automatically. In C/C++, programmer is responsible for both creation and destruction of objects. In Java, it is performed automatically.",
          "Memory Leak: A memory leak occurs when programmers create a memory in heap and forget to delete it."
        ]
      },
      {
        id: "oop-q20",
        globalIndex: 20,
        sectionIndex: 11,
        title: "Shallow Copy vs Deep Copy",
        text: "Different ways of copying objects:",
        details: [
          "Shallow Copy: An object is created by simply copying the data of all variables of the original object. If some variables are dynamically allocated memory, then the copied object variable will also reference the same memory location.",
          "Deep Copy: An object is created by copying data of all variables, and it also allocates similar memory resources with the same value to the object."
        ]
      },
      {
        id: "oop-q21",
        globalIndex: 21,
        sectionIndex: 12,
        title: "Early Binding vs Late Binding",
        text: "Binding refers to the linking of a procedure call to the code to be executed in response to the call.",
        details: [
          "Early Binding (Static Binding): The binding which can be resolved at compile time by compiler. E.g., method overloading.",
          "Late Binding (Dynamic Binding): The binding which can be resolved at run time. E.g., method overriding."
        ]
      },
      {
        id: "oop-q22",
        globalIndex: 22,
        sectionIndex: 13,
        title: "Method Hiding & Constructor Overloading",
        text: "Additional OOP concepts:",
        details: [
          "Method Hiding: If a subclass defines a static method with the same signature as a static method in the superclass, then the method in the subclass hides the one in the superclass.",
          "Constructor Overloading: A technique of having more than one constructor with different parameter lists."
        ]
      },
      {
        id: "oop-q23",
        globalIndex: 23,
        sectionIndex: 14,
        title: "Common OOP Questions",
        text: "Frequently asked questions regarding overriding and overloading:",
        details: [
          "Can we overload main method? Yes, we can overload the main method.",
          "Can we override static method? No, we cannot override static methods because method overriding is based on dynamic binding at runtime and the static methods are bonded using static binding at compile time.",
          "Can we override private method? No, we cannot override private methods because they are not accessible outside the class.",
          "Can we override final method? No, we cannot override final methods.",
          "Can we override constructor? No, we cannot override constructors.",
          "Can we inherit constructor? No, constructors are not inherited.",
          "Can we inherit private members? No, private members are not inherited.",
          "Can we inherit final class? No, final classes cannot be inherited."
        ]
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
        id: "oop-q24",
        globalIndex: 24,
        sectionIndex: 1,
        title: "Namespaces",
        text: "A logical division of code designed to stop naming conflicts and define scope for identifiers.",
        details: [
          "Removes ambiguity when different tasks occur with same name.",
          "Standard namespace 'std' contains inbuilt classes and functions."
        ]
      },
      {
        id: "oop-q25",
        globalIndex: 25,
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
        id: "oop-q26",
        globalIndex: 26,
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
