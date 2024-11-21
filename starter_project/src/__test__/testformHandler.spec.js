import { handleSubmit } from '../client/js/formHandler'

describe('Test, the function "handleSubmit()" should exist', () => {
test('It should return true', async () => {
    expect(handleSubmit).toBeDefined();
});
});

describe('Test, the function "handleSubmit()" should be a function', () => {
test('It should be a function', async () => {
    expect(typeof handleSubmit).toBe("function");
});
});

describe('Test, the function "handleSubmit()" should handle invalid URLs', () => {
    beforeEach(() => {
      // Create the HTML structure for testing
    document.body.innerHTML = `
        <form id="urlForm">
        <input type="text" id="name" />
        <button type="submit">Submit</button>
        <div id="text"></div>
        <div id="polarity"></div>
        <div id="irony"></div>
        <div id="confidence"></div>
        <div id="subjectivity"></div>
        </form>
    `;
    });

    test('should display an alert for invalid URL', () => {
      // Mock the alert function
    window.alert = jest.fn();

      // Set the input value to an invalid URL
    document.getElementById('name').value = 'invalid_url';

      // Call the handleSubmit function
    handleSubmit(new Event('submit'));

      // Expect the alert to be called with the correct message
    expect(window.alert).toHaveBeenCalledWith("please enter valid url");
    });

    test('should clear the UI for invalid URL', () => {
      // Set the input value to an invalid URL
    document.getElementById('name').value = 'invalid_url';

      // Call the handleSubmit function
    handleSubmit(new Event('submit'));

      // Expect the UI elements to be cleared
    expect(document.getElementById('text').textContent).toBe('');
    expect(document.getElementById('polarity').textContent).toBe('');
    expect(document.getElementById('irony').textContent).toBe('');
    expect(document.getElementById('confidence').textContent).toBe('');
    expect(document.getElementById('subjectivity').textContent).toBe('');
    });
});