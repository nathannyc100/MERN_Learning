import { useEffect, useState } from "react"

export default function Home() {
    const [firearms, setFirearms] = useState(null)

    useEffect(() => {
       async function fetchFirearms() {
            try {
                const response = await fetch('/api/firearms');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                setFirearms(json);

            } catch (error) {
                console.error('Error fetching firearms:', error);
            }
        } 
        
        fetchFirearms()
    }, [])


    return (
        <div className='home'>
            <div className='firearms'>
                <table>
                    <thead>
                        <tr>
                            <td>Firearm</td>
                        </tr>
                    </thead>
                    <tbody>
                        {firearms && firearms.map((firearm) => (
                            <tr key={firearm._id}>
                                <td >{firearm.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
