export async function fetchpodcasts(setPodcasts, setError, setLoading){
    try{
 const res = await fetch ("https://podcast-api.netlify.app/");
 if (!res.ok) throw new Error (`${res.status}`);
 const data = await res.json();
 setPodcasts (data);
    } catch (err){
console.error("failed to fetch podcasts:", err);
setError(err.message)

    } finally{
        setLoading(false)
    }
}