<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">AI Companion</h3>

  <p align="center">
    An app where users can engage dialogue with AI generated companions
    <br />
    <a href="https://github.com/richardjhong/ai-companion"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ai-companion-beta.vercel.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Main Page][main-page]]()

This project started off with following along the YouTube tutorial listed in the <a href="#acknowledgments">Acknowledgments</a> section. I made changes throughout the project as well to introduce personal elements of interest.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][Next.js]][Next-url]*
- [![React][React]][React-url]
- [![TypeScript][TypeScript.js]][TypeScript-url]
- [![Tailwindcss][Tailwindcss]][Tailwindcss-url]**
- [![Prisma][Prisma]][Prisma-url]
- [![MySQL][MySQL]][MySQL-url]
- [![Stripe][Stripe]][Stripe-url]
- [![Upstash][Upstash]][Upstash-url]
- [![Pinecone][Pinecone]][Pinecone-url]
- [![Clerk][Clerk]][Clerk-url]


\* using App Router

\** with shadcn/ui

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps:

### Prerequisites

Several different API keys and configuration settings are used throughout the project. 

* [Clerk](https://clerk.com/)
* [Cloudinary](https://cloudinary.com/)
* [Upstash](https://upstash.com/)
* [OpenAI](https://platform.openai.com)
* [Replicate](https://replicate.com)
* [Stripe](https://dashboard.stripe.com/developers)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/richardjhong/ai-companion.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

3. Create an env file at the root level of the backend directory named `.env`.

   Within this file copy in the following code and replace where appropriate.

   ```js
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLIC_CLERK_KEY_HERE
   CLERK_SECRET_KEY=YOUR_SECRET_CLERK_KEY_HERE
   
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   
   DATABASE_URL=YOUR_PRISMADB_URL_HERE
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME_HERE
   
   PINECONE_INDEX=YOUR_PINECONE_INDEX_HERE
   PINECONE_ENVIRONMENT=YOUR_PINECONE_ENVIRONMENT_HERE
   PINECONE_API_KEY=YOUR_PINECONE_API_KEY_HERE
   
   UPSTASH_REDIS_REST_URL=YOUR_UPSTASH_REDIS_REST_URL_HERE
   UPSTASH_REDIS_REST_TOKEN=YOUR_UPSTASH_REDIS_REST_TOKEN_HERE
   
   OPENAI_API_KEY=YOUR_OPENAI_API_KEY_HERE
   
   REPLICATE_API_TOKEN=YOUR_REPLICATE_API_TOKEN_HERE
   
   STRIPE_API_KEY=YOUR_STRIPE_API_KEY_HERE
   
   STRIPE_WEBHOOK_SECRET=YOUR_STRIPE_WEBHOOK_SECRET_HERE
   
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Run the following command:
    ```sh
    npm run dev
    ```

5. Lastly open `http://localhost:3000` within a browser.

   You can also run the following command to see the GUI for the prisma database in another terminal:

   ```sh
     npx prisma studio
   ```

   View the prisma studio GUI by visiting `https://localhost:5555`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<br>

<p align="center">Main page</p>

[![Companion list home page][main-page]]()

<p align="center">Example conversation</p>

[![Example conversation][example-conversation]]()

<p align="center">Creating / Editing a Companion</p>

[![Creating/Editing a companion][create_edit-companion]]()

<br>

The main features of this project are creation/editing of companions and being able to converse with them. Beyond that, users must be on a pro model to be able to create/ edit a companion but are free to converse with any existing companion (including ones made by other users!).

* Any user can converse with existing companions, including companions made by others; however to create or edit a companion, the user must be on the pro subscription model. This is enabled through Stripe integration. 

  - To complete the Stripe payment integration, use the credit card below (other fields can filled with any mock value):
    ```text
    4242 4242 4242 4242
    ```

* When creating a companion, there are fields that are required to be filled out:
  - Name
  - Description
  - Category

  There are two more fields that are needed for configuration and tuning of the companion's dialogue:
  - Instructions: The user should give a detailed backstory of the companion along with relevant details to shape the conversation.
  - Example Conversation: The user should provide an example conversation following the format of the placeholder example. 

  ```text
  Human: *insert dialogue here*
  [Companion name]: *insert reply here*

  Human: *insert dialogue here*
  [Companion name]: *insert reply here*
  ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

* A combination of Clerk and Next app router were used for user authentication

* Stripe is used as the payment processing platform for users to change into a subscribed model. 

* Upstash (Redis DB) and Pinecone (Vector DB) along with Replicate and OpenAI are used for generation of AI dialogue.

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Richard Hong - rhong24@gmail.com

Project Link: [https://github.com/richardjhong/ai-companion](https://github.com/richardjhong/ai-companion)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [AI Companion SaaS: Next 13 App Router, React, Stripe, Prisma, MySQL, Tailwind | Full Course 2023](https://www.youtube.com/watch?v=PjYWpd7xkaM&ab_channel=CodeWithAntonio)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://opensource.org/licenses/MIT
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[main-page]: ./public/main-page.png
[example-conversation]: ./public/example-conversation.png
[create_edit-companion]: ./public/create_edit-companion.png
[list-occasion_pending]: ./assets/list-occasion_pending.png
[list-occasion_completed]: ./assets/list-occasion_completed.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript.js]: https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Tailwindcss]: https://img.shields.io/badge/tailwindcss-white?style=for-the-badge&logo=tailwindcss&logoColor=39BDF8&color=0B1120
[Tailwindcss-url]: https://tailwindcss.com/
[Prisma]: https://img.shields.io/badge/Prisma-%232D3748?style=for-the-badge&logo=Prisma
[Prisma-url]: https://www.prisma.io/
[MySQL]: https://img.shields.io/badge/MySQL-%234479A1?style=for-the-badge&logo=mysql&logoColor=%23FFFFFF
[MySQL-url]: https://www.mysql.com/
[Stripe]: https://img.shields.io/badge/Stripe-%23008CDD?style=for-the-badge&logo=stripe&logoColor=%23FFFFFF
[Stripe-url]: https://stripe.com  
[Upstash]: https://img.shields.io/badge/Upstash-%2300E9A3?style=for-the-badge&logo=upstash&logoColor=%23FFFFFF
[Upstash-url]: https://upstash.com/
[Pinecone]: https://img.shields.io/badge/pinecone-black
[Pinecone-url]: https://pinecone.io/
[Clerk]: https://img.shields.io/badge/clerk-black
[Clerk-url]: https://clerk.com/
