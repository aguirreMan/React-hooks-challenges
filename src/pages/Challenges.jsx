import WeatherChallenge from '../challenges/WeatherChallenge'
import TimerChallenge from '../challenges/TimerChallenge'
import FormChallenge from '../challenges/FormChallenge'


export default function Challenges() {
    return (
        <div className='space-y-8'>
            <section className='rounded-lg bg-slate-900 p-6 shadow'>
                <h2 className='mb-4 text-xl font-semibold'>Weather Challenge</h2>
                <WeatherChallenge />
            </section>

            <section className='rounded-lg bg-slate-900 p-6 shadow'>
                <h2 className='mb-4 text-xl font-semibold'>Timer Challenge</h2>
                <TimerChallenge />
            </section>

            <section className='rounded-lg bg-slate-900 p-6 shadow'>
                <h2 className='mb-4 text-xl font-semibold'>Form Challenge</h2>
                <FormChallenge />
            </section>
        </div>
    )
}