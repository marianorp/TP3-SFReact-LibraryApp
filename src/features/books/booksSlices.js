import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Unlocking Android",
    isbn: 1933988673,
    year: 2009,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    description:
      "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
    authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
  },
  {
    id: 2,
    title: "Android in Action, Second Edition",
    isbn: 1935182722,
    year: 2011,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
    description:
      "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
    authors: ["W. Frank Ableson", "Robi Sen"],
  },
  {
    id: 3,
    title: "Specification by Example",
    isbn: 1617290084,
    year: 2011,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
    description:
      "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
    authors: ["Gojko Adzic"],
  },
  {
    id: 4,
    title: "Flex 3 in Action",
    isbn: 1933988746,
    year: 2009,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
    description:
      "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it.",
    authors: ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
  },
  {
    id: 5,
    title: "Flex 4 in Action",
    isbn: 1935182420,
    year: 2010,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
    description:
      "Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it.",
    authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
  },
  {
    id: 6,
    title: "Collective Intelligence in Action",
    isbn: 1933988312,
    year: 2008,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
    description:
      "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at once Identifying the wants, needs, and knowledge of internet users can be like listening to a mob. In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance.",
    authors: ["Satnam Alag"],
  },
  {
    id: 7,
    title: "Zend Framework in Action",
    isbn: 1933988320,
    year: 2008,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
    description:
      "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
    authors: ["Rob Allen", "Nick Lo", "Steven Brown"],
  },
  {
    id: 8,
    title: "Flex on Java",
    isbn: 1933988797,
    year: 2010,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
    description:
      " A beautifully written book that is a must have for every Java Developer. Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
    authors: ["Bernerd Allmon", "Jeremy Anderson"],
  },
  {
    id: 9,
    title: "Griffon in Action",
    isbn: 1935182234,
    year: 2012,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
    description:
      "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
    authors: ["Andres Almiray", "Danno Ferrin", "", "James Shingler"],
  },
  {
    id: 10,
    title: "OSGi in Depth",
    isbn: 193518217,
    year: 2011,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
    description:
      "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.",
    authors: ["Alexandre de Castro Alves"],
  },
  {
    id: 11,
    title: "Flexible Rails",
    isbn: 1933988509,
    year: 2008,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
    description:
      '"Flexible Rails created a standard to which I hold other technical books. You definitely get your money\'s worth."',
    authors: ["Peter Armstrong"],
  },
  {
    id: 13,
    title: "Hello! Flex 4",
    isbn: 1933988762,
    year: 2009,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
    description:
      "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
    authors: ["Peter Armstrong"],
  },
  {
    id: 14,
    title: "Coffeehouse",
    isbn: 1884777384,
    year: 1997,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
    description:
      "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web.",
    authors: ["Levi Asher", "Christian Crumlish"],
  },
  {
    id: 15,
    title: "Team Foundation Server 2008 in Action",
    isbn: 1933988592,
    year: 2008,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg",
    description:
      "In complex software projects, managing the development process can be as critical to success as writing the code itself. A project may involve dozens of developers, managers, architects, testers, and customers, hundreds of builds, and thousands of opportunities to get off-track. To keep tabs on the people, tasks, and components of a medium- to large-scale project, most teams use a development system that allows for easy monitoring, follow-up, and accountability.",
    authors: ["Jamil Azher"],
  },
  {
    id: 16,
    title: "Brownfield Application Development in .NET",
    isbn: 1933988711,
    year: 2010,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
    description:
      "Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.",
    authors: ["Kyle Baley", "Donald Belcham"],
  },
  {
    id: 17,
    title: "MongoDB in Action",
    isbn: 1935182870,
    year: 2011,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
    description:
      "MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.",
    authors: ["Kyle Banker"],
  },
  {
    id: 18,
    title: "Distributed Application Development with PowerBuilder 6.0",
    isbn: 1884777686,
    year: 1998,
    description:
      "Distributed Application Development with PowerBuilder 6.0 is a vital source for the PowerBuilder programmer; it provides the sort of detailed coverage of Distributed PowerBuilder that you can find nowwhere else. The book opens with a discussion of distributed computing in general, as well as its design principles and technologies.",
    authors: ["Michael J. Barlotta"],
  },
  {
    id: 20,
    title: "Taming Jaguar",
    isbn: 1884777686,
    year: 2000,
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg",
    description:
      "Taming Jaguar is part of the PowerBuilder Developer's series, which includes Distributed Application Development with PowerBuilder 6 and Jaguar Development with PowerBuilder 7. An application server is the heart of your enterprise computing architecture, centralizing your web content, business logic, and access to your data and legacy applications.",
    authors: ["Michael J. Barlotta", "Jason R. Weiss"],
  },
  {
    id: 21,
    title: "Struts 2 in Action",
    isbn: 1933988076,
    year: 2008,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dbrown.jpg",
    description:
      "The original Struts project revolutionized Java web development and its rapid adoption resulted in the thousands of Struts-based applications deployed worldwide. Keeping pace with new ideas and trends, Apache Struts 2 has emerged as the product of a merger between the Apache Struts and OpenSymphony WebWork projects, united in their goal to develop an easy-to-use yet feature-rich framework. Struts 2 represents a revolution in design and ease of use when compared to classic Struts. It adds exciting and powerful features such as a plugin framework, JavaServer Faces integration, and XML-free configuration.    Struts 2 In Action introduces the Apache Struts 2 web application framework and shows you how to quickly develop professional, production-ready modern web applications. Written by Don Brown, one of the leading developers of Struts 2, Chad Davis, a passionate Struts 2 developer, along with Scott Stanlick, this book gently walks you through the key features of Struts 2 in example-driven, easy-to-digest sections.    Struts 2 in Action delivers accurate, seasoned information that can immediately be put to work. This book is designed for working Java web developers   especially those with some background in Struts 1 or WebWork. The core content, covering key framework components such as Actions, Results, and Interceptors, includes new features like the annotation-based configuration options. You'll find chapters on Struts 2 plugins, FreeMarker, and migration from Struts 1 and WebWork 2. Finally, new topics such as the Ajax tags, Spring Framework integration, and configuration by convention give familiar subjects new depth.",
    authors: [ "Donald Brown", "Chad Michael Davis", "", "Scott Stanlick" ],
  },
  {
    id: 22,
    title: "RSS and Atom in Action",
    isbn: 1932394494,
    year: 2006,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dmjohnson.jpg",
    description: "RSS and Atom in Action is organized into two parts. The first part introduces the blog technologies of newsfeed formats and publishing protocols   the building blocks. The second part shows how to put to those blocks together to assemble interesting and useful blog applications.    In keeping with the principle behind Manning   s    In Action    series, this book shows the reader, through numerous examples in Java and C#, how to parse Atom and RSS format newsfeeds, how to generate valid newsfeeds and serve them efficiently, and howto automate blogging via web services based on the new Atom protocol and the older MetaWeblog API. The book also shows how to develop a complete blog client library that readers can use in their own applications. The second half of the book is devoted to a dozen blog apps   small but immediately useful example applications such as a community aggregator, a file distribution newsfeed, a blog cross-poster, an email-to-blog gateway, Ant tasks for blogging software builds, and more.",
    authors: ["Dave Johnson"],
  },
  {
    id: 23,
    title: "Java Foundation Classes",
    isbn: 1884777678,
    year: 2001,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/drye.jpg",
    description: "Java Foundation Classes: Swing Reference is the comprehensive guide to Swing 1.1 and Java 2's Swing package. Written by the programmers that maintain the Internet's Swing FAQ, this book is based on the much enhanced, most recent release of Swing. All documentation in this book is based on the authors' experience with the Swing source code and their digging under the surface to make sure what they are saying is correct. This book offers solid reference material, extensive examples and an introductory tutorial provide programmers with a quick start and ongoing support as their daily Swing reference. The authors have not trusted a single description of the Swing JavaDoc--this book is verified, correct documentation for the Swing library. For programmers wondering which methods are unimplemented or empty, which are synchronized, which throw runtime exceptions, the JavaDoc won't tell them, but this book will.",
    authors: ["Stephen C. Drye", "William C. Wake"],
  },
  {
    id: 24,
    title: "Command-line Processing with CLI",
    isbn: 19323945241,
    year: 2005,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal13.jpg",
    description: "This book is your concise step-by-step guide to writing command line clients, such as Git and npm, with Node.js.",
    authors: ["Vikram Goyal"],
  },
  {
    id: 25,
    title: "Python and Tkinter Programming",
    isbn: 1884777813,
    year: 2000,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grayson.jpg",
    description: "If you are interested in Python and Tkinter, you have probably noticed that although there is some good contributed documentation on the Web, there is not enough to get Tkinter applications up and running. Python and Tkinter Programming is the answer. It is designed for readers who are familiar with Python and who need to develop applications with Graphical User Interfaces (GUIs).    Python and Tkinter Programming presents the elements of typical Python and Tkinter applications in a straight-forward fashion. Sample code illustrates each element. Complete applications that go far beyond the fill-the-form class of graphical user interfaces are presented; here you will find examples of complex controls, drawn interfaces and photorealistic panels. The code can readily be used as templates for new applications. Extensions to Python (such as ODBC) are examined as well. Complete source code for all examples, along with the latest releases of required software, will be available from Manning's web site.    Tkinter is fully documented. To date, this level of documentation has not been available to Tkinter programmers, who have been required to read the code or interpret Tcl/Tk man pages to fully understand component usage.    Python and Tkinter Programming will be useful in both Windows and Unix environments, and the example code is portable between the two environments.",
    authors: ["John E. Grayson"],
  },
  {
    id: 26,
    title: "Azure in Action",
    isbn: 1935182481,
    year: 2010,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hay.jpg",
    description: "Azure in Action is a fast-paced tutorial intended for architects and developers looking to develop on Windows Azure and the Windows Azure Platform. It's designed both for readers new to cloud concepts and for those familiar with cloud development but new to Azure. After a quick walk through the basics, it guides you all the way from your first app through more advanced concepts of the Windows Azure Platform.",
    authors: ["Chris Hay", "Brian H. Prince"],
  },
  {
    id: 27,
    title: "Code Generation in Action",
    isbn: 1930110979,
    year: 2003,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/herrington.jpg",
    description: "Code Generation In Action covers building database access, user interface, remote procedure, test cases, and business logic code as well as code for other key system functions.",
    authors: ["Jack Herrington"],
  },
  {
    id: 28,
    title: "Windows PowerShell in Action",
    isbn: 1932394907,
    year: 2007,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/payette.jpg",
    description: "If all it had going for it was the authoratative pedigree of the writer, it might be worth it, but it's also well-written, well-organized, and thorough, which I think makes it invaluable as both a learning tool and a reference. ",
    authors: ["Bruce Payette"],
  },
  {
    id: 29,
    title: "iOS in Practice",
    isbn: 1617291269,
    year: 2013,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cahill.jpg",
    description: "This book distills the hard-won experience of iOS developer Bear Cahill into 98 specific iOS techniques on key topics including managing data",
    authors: ["Bear P. Cahill"],
  },
  {
    id: 30,
    title: "Ruby for Rails",
    isbn: 1932394699,
    year: 2006,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg",
    description: "The word is out: with Ruby on Rails you can build powerful Web applications easily and quickly! And just like the Rails framework itself, Rails applications are Ruby programs. That means you can   t tap into the full power of Rails unless you master the Ruby language.", "longDescription" : "Ruby for Rails helps Rails developers achieve Ruby mastery. Each chapter deepens your Ruby knowledge and shows you how it connects to Rails",
    authors: ["David A. Black"],
  },
  {
    id: 31,
    title: "PFC Programmer's Reference Manual",
    isbn: 1884777554,
    year: 1998,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brooks.jpg",
    description: "PFC Programmers' Reference Manual provides information that should prove indispensible for the PowerBuilder programmer trying to learn the PowerBuilder Foundation Classes. It lists all of the objects and functions that they might use for a project with notes from the author on each function. Service-based architecture and appropriate object-oriented techniques are stressed throughout.    The more difficult objects and services are given special attention; these are the ones that are sure to enhance your image as an expert in this emerging technology.",
    authors: ["Richard Brooks"],
  },
  {
    id: 32,
    title: "The Quick Python Book, Second Edition",
    isbn: 1935182202,
    year: 2010,
    thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ceder.jpg",
    description: "This revision of Manning's popular The Quick Python Book offers a clear, crisp introduction to the elegant Python programming language and its famously easy-to-read syntax.",
    authors: ["Naomi R. Ceder"],
  },
  {
    id: 33,
    title: "Mobile Agents",
    isbn: 1884777368,
    year: 1997,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cockayne.jpg",
    description: "Mobile Agents is the first book to give the reader the ability to create and use powerful mobile agents on the Internet.",
    authors: ["William R. Cockayne and Michael Zyda"],
  },
  {
    id: 34,
    title: "Hello! HTML5 & CSS3",
    isbn: 1935182897,
    year: 2012,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther.jpg",
    description: "Quick and Easy HTML5 and CSS3 is written for the web designer or developer who wants a fast, example-oriented introduction to the new HTML and CSS features. After a quick review of the basics, you'll turn to what's new. Start by learning to apply important new elements and attributes by building your first real HTML5 pages.",
    authors: ["Rob Crowther"],
  },
  {
    id: 35,
    title: ".NET Multithreading",
    isbn: 1930110545,
    year: 2002,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dennis.jpg",
    description: "If you need high performance, or a rich user experience, you should consider multithreading. With .NET you can develop stable and robust multithreaded applications with minimal effort. .NET Multithreading teaches the basics in an understandable and practical way.",
    authors: ["Alan Dennis"],
  },
  {
    id: 36,
    title: "Mule in Action",
    isbn: 1933988967,
    year: 2009,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dossot.jpg",
    description: "Mule is a widely used open source enterprise service bus. It is standards based, provides easy integration with Spring and JBoss, and fully supports the enterprise messaging patterns collected by Hohpe and Woolf. You can readily customize Mule without writing a lot of new code.",
    authors: ["David Dossot", "John D'Emic"],
  },
  {
    id: 37,
    title: "Java Foundation Classes",
    isbn: 1884777678,
    year: 2001,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/drye.jpg",
    description: "Java Foundation Classes: Swing Reference is the comprehensive guide to Swing 1.1 and Java 2's Swing package. Written by the programmers that maintain the Internet's Swing FAQ, this book is based on the much enhanced, most recent release of Swing. All documentation in this book is based on the authors' experience with the Swing source code and their digging under the surface to make sure what they are saying is correct.",
    authors: ["Stephen C. Drye", "William C. Wake"],
  },
  {
    id: 38,
    title: "PowerBuilder 6.0 Questions & Answers",
    isbn: 1884777708,
    year: 1998,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton.jpg",
    description: "If you'd like to learn PowerBuilder--or enhance your skills-- this book is for you. Its hands-on approach will show you how to write real code. Each section takes a specific \"How do I \" topic and answers commonly asked questions in an easy-to-understand, conversational manner.",
    authors: ["Tim Hatton"],
  },
  {
    id: 39,
    title: "Code Generation in Action",
    isbn: 1930110979,
    year: 2003,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/herrington.jpg",
    description: "Code Generation In Action covers building database access, user interface, remote procedure, test cases, and business logic code as well as code for other key system functions.",
    authors: ["Jack Herrington"],
  },
  {
    id: 40,
    title: "SNA and TCP/IP Enterprise Networking",
    isbn: 131271687,
    year: 1997,
    thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lynch.jpg",
    description: "SNA and TCP/IP Enterprise Networking shows the reader how enterprise networking evolved, what approaches and techniques can be used today, and where tomorrow's trends lie, illustrating among others Web-to-SNA connectivity and Java based integration approaches.",
    authors: ["Vincent Massol with Ted Husted"],
  },
  
];



export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {},
    editBook: (state, action) => {},
    deleteBook: (state, action) => {},
  },
});

export const { addBook, editBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
