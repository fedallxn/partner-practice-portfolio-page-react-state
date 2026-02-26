function FeedbackForm(props) {
    return (
        <>
            <h1>Feedback Form</h1>
            <form>
                <div>
                    <label>Name: 
                    <input
                        value={props.formData.name}
                        onChange={props.handleChange}
                        type='text'
                        name='name'
                        required
                    />
                    </label>
                </div>
                <div>
                    <label>Email: 
                    <input 
                        value={props.formData.email}
                        onChange={props.handleChange}
                        type='text'
                        name='email'
                        required
                    />
                    </label>
                </div>
                <div>
                    <label>Feedback: 
                    <br />
                    <textarea 
                        value={props.formData.feedback}
                        rows={5}
                        cols={25}
                        onChange={props.handleChange}
                        name='feedback'
                        required
                    />
                    </label>
                </div>
            <button type='submit'>Submit</button>
            </form>
            <p>Hello, {props.formData.name}!</p>
            <p>Thank you for letting us contact you at {props.formData.email}...</p>
            <p>Feedback given: {props.formData.feedback}</p>
        </>
    )
}

export default FeedbackForm;
