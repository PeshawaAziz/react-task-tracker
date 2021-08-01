import { useState } from "react";

function AddTaskForm({ onSubmit }) {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    function onFormSubmit(event) {
        event.preventDefault();

        if (!text.trim()) {
            alert("Please add a task!");
            return;
        }
        onSubmit({ text, day, reminder });

        setText("");
        setDay("");
        setReminder(false);
    }

    return (
        <form className="pb-20" onSubmit={onFormSubmit}>
            <div className="form-group">
                <label>Task</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <label>Day & Time</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={(event) => {
                        setDay(event.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <label>Set Reminder</label>
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(event) =>
                        setReminder(event.currentTarget.checked)
                    }
                />
            </div>

            <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Save Task"
            />
        </form>
    );
}

export default AddTaskForm;
