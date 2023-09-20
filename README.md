Home assignment

- Used Typescript, Playwright, Playwright-report, Playwright visual testing, dotenv
- Automated test cases for the saucdemo test website
- Tested the main functionality, and the authentication flow as well
- Added multiple test cases with different users
    - Used users:  standard_user, locked_out_user, problem_user, performance_glitch_user

To run all tests:
- npx playwright test 
To update the screenshots for the visual testing: 
- npx playwright test --update-snapshots  