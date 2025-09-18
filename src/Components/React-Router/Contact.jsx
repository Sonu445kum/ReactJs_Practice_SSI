import { useLocation, useNavigate } from "react-router-dom";

 export default function Contact() {
    const navigate = useNavigate();
    const location = useLocation();
    const cameFrom = location.state?.from || "(direct)";


    function handleSubmit(e) {
        e.preventDefault();
        // programmatic navigation after form submission
        // navigate back to home and send a little state
        navigate("/", { state: { message: "Thanks for contacting us!" } });
    }


    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">Contact</h1>
            <p className="mb-4">You arrived here from: <strong>{cameFrom}</strong></p>


            <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
                <input name="name" placeholder="Your name" className="border p-2 rounded" required />
                <textarea name="message" placeholder="Message" className="border p-2 rounded" required />
                <div className="flex gap-2">
                    <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Send</button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 rounded border"
                    >
                        Go Back
                    </button>
                </div>
            </form>
        </div>
    );
}