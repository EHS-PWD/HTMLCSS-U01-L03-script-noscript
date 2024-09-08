### Unit 01 - Lesson 3: Script and Noscript Tags

#### **Objective:**

After learning about the `<script>` and `<noscript>` tags, students will apply these concepts by extending their previous HTML document. This assignment will demonstrate their understanding of how to include JavaScript in an HTML document and provide fallback content using the `<noscript>` tag.

---

### **Step-by-Step Guide:**

1. **Open Your Existing HTML Document:**

   - [ ] Open the `index.html` file you created in Lessons 1 and 2.

2. **Add a Script Tag Inside the Head Section:**

   - [ ] Inside the `<head>` tag, add the following `<script>` tag to reference an external JavaScript file. For now, use a placeholder link as you don’t have a real script file yet:
     ```html
     <script src="script.js"></script>
     ```

3. **Create an Inline Script in the Body Section:**

   - [ ] Inside the `<body>` tag, add an inline `<script>` that displays an alert message when the page loads. Add this script at the bottom of the `<body>` section:
     ```html
     <script>
       alert("Welcome to my interactive web page!");
     </script>
     ```

4. **Add Fallback Content with Noscript Tag:**

   - [ ] Directly below the `<script>` tag inside the `<body>`, add a `<noscript>` tag to provide fallback content for users who have JavaScript disabled in their browser. This tag will display a message instead of running the JavaScript code:
     ```html
     <noscript>
       <p>
         JavaScript is disabled in your browser. Please enable JavaScript for
         the full experience.
       </p>
     </noscript>
     ```

5. **Save Your Work:**

   - [ ] Save the file as `index.html`.

6. **Test Your HTML Document:**

   - [ ] Open the `index.html` file in a web browser. If JavaScript is enabled, you should see a pop-up alert that says, "Welcome to my interactive web page!".
   - [ ] To test the `<noscript>` tag, disable JavaScript in your browser settings and refresh the page. You should now see the message "JavaScript is disabled in your browser. Please enable JavaScript for the full experience."

7. **Submit Your Work:**
   - [ ] Once you have verified that both the JavaScript and noscript content work correctly, submit the updated `index.html` file to the class assignment folder or through the school’s learning management system.

---

### **Assessment Criteria:**

- Proper addition of the `<script>` tag to reference an external JavaScript file.
- Successful implementation of an inline JavaScript alert function.
- Correct use of the `<noscript>` tag to display fallback content.
- Proper structure and syntax of the HTML document.
- Submission of the updated `index.html` file.
