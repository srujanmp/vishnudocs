import { Section } from "./docs";

export const osSections: Section[] = [
  {
    id: "os-intro",
    title: "OS Introduction",
    icon: "Cpu",
    color: "#ef4444",
    gradient: "from-red-500/20 to-orange-500/20",
    questions: [
      {
        id: "os-q1",
        globalIndex: 1,
        sectionIndex: 1,
        title: "Operating System",
        text: "An Operating System can be defined as an interface between user and hardware. It is responsible for the execution of all the processes, Resource Allocation, CPU management, File Management and many other tasks. The purpose of an operating system is to provide an environment in which a user can execute programs in a convenient and efficient manner."
      },
      {
        id: "os-q2",
        globalIndex: 2,
        sectionIndex: 2,
        title: "Types of Operating Systems",
        text: "Operating systems are categorized based on their processing capabilities:",
        details: [
          "Batch OS – A set of similar jobs are stored in the main memory for execution. A job gets assigned to the CPU, only when the execution of the previous job completes.",
          "Multiprogramming OS – The main memory consists of jobs waiting for CPU time. The OS selects one of the processes and assigns it to the CPU. Whenever the executing process needs to wait for any other operation (like I/O), the OS selects another process from the job queue and assigns it to the CPU. This way, the CPU is never kept idle.",
          "Multitasking OS – Multitasking OS combines the benefits of Multiprogramming OS and CPU scheduling to perform quick switches between jobs. The switch is so quick that the user can interact with each program as it runs.",
          "Time Sharing OS – Time-sharing systems require interaction with the user to instruct the OS to perform various tasks. The OS responds with an output. The instructions are usually given through an input device like the keyboard.",
          "Real Time OS – Real-Time OS are usually built for dedicated systems to accomplish a specific set of tasks within deadlines."
        ]
      }
    ]
  },
  {
    id: "process-management",
    title: "Process & Thread Management",
    icon: "Activity",
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-orange-500/20",
    questions: [
      {
        id: "os-q3",
        globalIndex: 3,
        sectionIndex: 1,
        title: "Process",
        text: "A process is a program under execution. The value of the program counter (PC) indicates the address of the next instruction of the process being executed. Each process is represented by a Process Control Block (PCB)."
      },
      {
        id: "os-q4",
        globalIndex: 4,
        sectionIndex: 2,
        title: "Process Scheduling Terms",
        text: "Key metrics used in process scheduling:",
        details: [
          "Arrival Time – Time at which the process arrives in the ready queue.",
          "Completion Time – Time at which process completes its execution.",
          "Burst Time – Time required by a process for CPU execution.",
          "Turn Around Time – Time Difference between completion time and arrival time (TAT = CT - AT).",
          "Waiting Time (WT) – Time Difference between turn around time and burst time (WT = TAT - BT)."
        ]
      },
      {
        id: "os-q5",
        globalIndex: 5,
        sectionIndex: 3,
        title: "Thread",
        text: "A thread is a lightweight process and forms the basic unit of CPU utilization. A process can perform more than one task at the same time by including multiple threads.",
        details: [
          "A thread has its own program counter, register set, and stack.",
          "A thread shares resources with other threads of the same process: the code section, the data section, files and signals.",
          "fork() system call: A new thread, or a child process of a given process, can be introduced by using the fork() system call. A process with n fork() system call generates 2^n – 1 child processes.",
          "User threads: Implemented by users.",
          "Kernel threads: Implemented by OS."
        ]
      }
    ]
  },
  {
    id: "scheduling-algorithms",
    title: "Scheduling Algorithms",
    icon: "ListOrdered",
    color: "#10b981",
    gradient: "from-emerald-500/20 to-teal-500/20",
    questions: [
      {
        id: "os-q6",
        globalIndex: 6,
        sectionIndex: 1,
        title: "CPU Scheduling Algorithms",
        text: "Algorithms used to allocate CPU time to processes in the ready queue:",
        details: [
          "First Come First Serve (FCFS) : Simplest scheduling algorithm that schedules according to arrival times of processes.",
          "Shortest Job First (SJF): Processes which have the shortest burst time are scheduled first.",
          "Shortest Remaining Time First (SRTF): It is a preemptive mode of SJF algorithm in which jobs are scheduled according to the shortest remaining time.",
          "Round Robin (RR) Scheduling: Each process is assigned a fixed time, in a cyclic way.",
          "Priority Based scheduling (Non Preemptive): Processes are scheduled according to their priorities. If priorities match, then scheduling is according to the arrival time.",
          "Highest Response Ratio Next (HRRN): In this scheduling, processes with the highest response ratio are scheduled. This algorithm avoids starvation. Response Ratio = (Waiting Time + Burst time) / Burst time.",
          "Multilevel Queue Scheduling (MLQ): Processes are placed in different queues according to priority. Lower level queued processes are scheduled only after completion of processes from the top level queue.",
          "Multilevel Feedback Queue (MLFQ) Scheduling: It allows the process to move in between queues based on the characteristics of their CPU bursts."
        ]
      }
    ]
  },
  {
    id: "synchronization-deadlocks",
    title: "Synchronization & Deadlocks",
    icon: "Lock",
    color: "#f43f5e",
    gradient: "from-rose-500/20 to-pink-500/20",
    questions: [
      {
        id: "os-q7",
        globalIndex: 7,
        sectionIndex: 1,
        title: "The Critical Section Problem",
        text: "The Critical Section is the portion of the code in the program where shared variables are accessed and/or updated.",
        details: [
          "Race around Condition – The final output of the code depends on the order in which the variables are accessed.",
          "Mutual Exclusion – If a process Pi is executing in its critical section, then no other process is allowed to enter into the critical section.",
          "Progress – If no process is executing in the critical section, then the decision of a process to enter a critical section cannot be made by any other process that is executing in its remainder section.",
          "Bounded Waiting – There exists a bound on the number of times other processes can enter into the critical section after a process has made a request to access the critical section and before the request is granted."
        ]
      },
      {
        id: "os-q8",
        globalIndex: 8,
        sectionIndex: 2,
        title: "Synchronization Tools",
        text: "Tools used to manage concurrent access to shared data:",
        details: [
          "Semaphore : A protected variable or abstract data type used to lock the resource being used. Binary semaphores take only 0 and 1. Counting semaphores can range over an unrestricted domain.",
          "Mutex : Provides mutual exclusion. Either producer or consumer can have the key (mutex) and proceed with their work. Only one thread can work with the entire buffer at any point of time."
        ]
      },
      {
        id: "os-q9",
        globalIndex: 9,
        sectionIndex: 3,
        title: "Deadlocks",
        text: "A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.",
        details: [
          "Necessary Conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.",
          "Handling Methods: Deadlock prevention or avoidance (Banker's algorithm), Deadlock detection and recovery, or Ignore the problem all together (Windows/UNIX approach)."
        ]
      }
    ]
  },
  {
    id: "memory-management",
    title: "Memory Management",
    icon: "HardDrive",
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-indigo-500/20",
    questions: [
      {
        id: "os-q10",
        globalIndex: 10,
        sectionIndex: 1,
        title: "Memory Management Techniques",
        text: "Techniques allowing memory to be shared among multiple processes:",
        details: [
          "Overlays – The memory should contain only those instructions and data that are required at a given time.",
          "Swapping – In multiprogramming, the instructions that have used the time slice are swapped out from the memory.",
          "Single Partition Allocation – The memory is divided into two parts. One part is kept to be used by the OS and the other is kept to be used by the users.",
          "Multiple Partition Schemes – Fixed Partition (divided into fixed size) and Variable Partition (divided into variable sized).",
          "Allocation Schemes: First Fit (allotted first hole that fits), Best Fit (allotted hole that fits best, leaving minimum memory empty), Worst Fit (allotted hole that leaves maximum gap)."
        ]
      },
      {
        id: "os-q11",
        globalIndex: 11,
        sectionIndex: 2,
        title: "Paging & Segmentation",
        text: "Advanced memory management strategies:",
        details: [
          "Paging – The physical memory is divided into equal sized frames. The main memory is divided into fixed size pages. The size of a physical memory frame is equal to the size of a virtual memory frame.",
          "Segmentation – Segmentation is implemented to give users a view of memory. The logical address space is a collection of segments.",
          "Page Fault: Raised by hardware when a running program accesses a memory page that is mapped into the virtual address space, but not loaded in physical memory."
        ]
      },
      {
        id: "os-q12",
        globalIndex: 12,
        sectionIndex: 3,
        title: "Page Replacement Algorithms",
        text: "Algorithms used to decide which page to replace when a page fault occurs:",
        details: [
          "First In First Out (FIFO) – Simplest algorithm. Operating system keeps track of all pages in the memory in a queue, oldest page in front. Belady’s anomaly: possible to have more page faults when increasing the number of page frames.",
          "Optimal Page replacement – Pages are replaced which are not used for the longest duration of time in the future. Perfect but not possible in practice.",
          "Least Recently Used (LRU) – The page will be replaced with the one which is least recently used."
        ]
      }
    ]
  },
  {
    id: "disk-scheduling",
    title: "Disk Scheduling",
    icon: "Disc",
    color: "#8b5cf6",
    gradient: "from-violet-500/20 to-purple-500/20",
    questions: [
      {
        id: "os-q13",
        globalIndex: 13,
        sectionIndex: 1,
        title: "Disk Scheduling Metrics",
        text: "Metrics used to evaluate disk performance:",
        details: [
          "Seek Time: Time taken to locate the disk arm to a specified track.",
          "Rotational Latency: Time taken by the desired sector of disk to rotate into a position to access read/write heads.",
          "Transfer Time: Time to transfer the data. Depends on rotating speed and number of bytes.",
          "Disk Access Time: Seek Time + Rotational Latency + Transfer Time.",
          "Disk Response Time: Average of time spent by a request waiting to perform its I/O operation."
        ]
      },
      {
        id: "os-q14",
        globalIndex: 14,
        sectionIndex: 2,
        title: "Disk Scheduling Algorithms",
        text: "Algorithms used to schedule I/O requests arriving for disk:",
        details: [
          "FCFS: Requests are addressed in the order they arrive in the disk queue.",
          "SSTF (Shortest Seek Time First): Requests having the shortest seek time are executed first.",
          "SCAN (Elevator Algorithm): Disk arm moves in a particular direction and services requests in its path, then reverses direction at the end.",
          "CSCAN: Disk arm scans the path, then reverses and scans the same path again. Prevents waiting at the other end.",
          "LOOK: Similar to SCAN but goes only to the last request to be serviced before reversing.",
          "CLOOK: Similar to CSCAN but goes only to the last request before reversing."
        ]
      }
    ]
  },
  {
    id: "os-key-terms",
    title: "Key OS Terms",
    icon: "Key",
    color: "#ec4899",
    gradient: "from-pink-500/20 to-rose-500/20",
    questions: [
      {
        id: "os-q15",
        globalIndex: 15,
        sectionIndex: 1,
        title: "OS Architecture & Memory Terms",
        text: "Important concepts in OS design and operation:",
        details: [
          "Monolithic kernel: Includes all operating system code in a single executable image.",
          "Micro kernel: Runs minimal performance affecting services; other operations performed by processor.",
          "Macro Kernel: Combination of micro and monolithic kernel.",
          "Re-entrancy : Memory saving technique where multiple users can share a single copy of a program during the same period.",
          "Demand paging: Specifies that if an area of memory is not currently being used, it is swapped to disk.",
          "Virtual memory: Enables processes to execute outside of memory, especially when a program cannot fit in physical memory.",
          "RAID: Redundant Array of Independent Disks, used to store data redundantly to improve performance (7 levels).",
          "Logical address space: Address generated by the CPU. Physical address space: Address seen by the memory unit."
        ]
      },
      {
        id: "os-q16",
        globalIndex: 16,
        sectionIndex: 2,
        title: "OS Performance Terms",
        text: "Terms related to OS efficiency and resource management:",
        details: [
          "Fragmentation: Memory wastage. Internal (fixed size units) and External (variable size units).",
          "Spooling: Data gathered to be used and executed by a device (e.g., printing).",
          "Starvation: Resource management problem where a process doesn't get resources for a long time.",
          "Aging: Technique used to avoid starvation in the resource scheduling system.",
          "Thrashing: Phenomenon in virtual memory schemes when the processor spends most of its time in swapping pages rather than executing instructions.",
          "Advantages of multithreaded programming: Enhanced responsiveness, resource sharing, economical, utilizes multiprocessing architecture."
        ]
      }
    ]
  }
];
