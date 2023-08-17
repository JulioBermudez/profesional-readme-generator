// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "IBM") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "") {
  }
  return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license === "IBM") {
    return `Your relationship with IBM is governed by several agreements which set out what is expected in terms of use of our software. These agreements are supplemented by offering-specific documents which set out the licensing terms in more detail. By installing and/or using IBM software, you agree to these terms.
    The licensing terms typically relate to how much of the software you can use, how and when you can use it, and/or who can use it. However, there are many other important terms set out in the agreements on matters such as:
    Use restrictions (for example, territories, purpose of use)
    Transfers and change of ownership
    Term of the agreement
    Pricing
    Verification
    One of the most important aspects of IBM licensing is the measurement of the license metric. This measurement counts your deployment and/or use of the product.`;
  } else if (license === "Apache") {
    return `While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ${renderLicenseBadge(data.license)}


  ## Table of Contents
  
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    [Description](#description)
    [Installation](#installation)    
    [Usage](#usage)
    [License](#license)
    [Contribution](#contribution)    
    [Tests](#tests)
    [Questions](#questions)



  ## Description

  ${data.description}
 
  
  ## Installation
  
  ${data.instalation}
  
  
  ## Usage
  ${data.usage}
  ![alt text](assets/images/screenshot.png)
  
  ## Licence
  ${renderLicenseSection(data.license)}


  ## Contribution
  
  ${data.contribution}
  

  ## Tests
  ${data.instruction}
  
  ## Questions

  <ul>
  <li> <a href="https://github.com/${data.username}">GitHub Profile<a/></li>
  <li> <a href="mailto:${data.email}">Email me<a/></li>
  </ul>

  `

  
}

module.exports = generateMarkdown;
