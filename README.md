# Project Name

Brief description of your ReactJS project.

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
3. [Usage](#usage)
4. [Docker](#docker)
5. [Contributing](#contributing)
6. [License](#license)

## Technologies Used

1. **ReactJS**: A JavaScript library for building user interfaces.
2. **Yarn**: A fast, reliable, and secure dependency management tool.
3. **Ant Design**: A React UI library with a set of high-quality components and themes.
4. **React DnD**: A set of higher-order components to turn any list into a draggable and droppable interface.
5. **Docker**: A platform for developing, shipping, and running applications in containers.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/khqnn/tutorly.git

2. Change into the project directory:

   ```bash
   cd tutorly


3. Install dependencies:

   ```bash
   yarn install

### Docker
To run the project using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t khaqan/tutorly:latest .

2. Run the Docker container:

   ```bash
   docker run -p 3000:80 khaqan/tutorly:latest


Access the application at http://localhost:3000

