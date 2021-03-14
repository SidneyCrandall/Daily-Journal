export const PostEntry = () => {
    return `
    <form>
        <div class="entries">
            <input value="" name="postTopicOfDay" class="post_Topic" type="text" placeholder="Topic of the Day" />
            <label for="mood">What are we Feeling Today: </label>
            <input value="" name="postMood" />
            <label for="journalDate">Date: </label>            
            <input value="" name="postDate" class="post_Date" type="date" min="2000-01-01" max="2031-12-31" />  
        </div>
            <textarea name="postEntry" class="text" placeholder="Journal Entry... "></textarea>
            <button id="newPost__submit">Submit</button>
    </form>    
            `
}


/*<
select name = "mood"
class = "post_Mood" >
    <
    option value = "Content" > Content < /option> <
option value = "Excited" > Excited < /option> <
option value = "Ok" > Ok < /option> <
option value = "Stressed" > Stressed < /option> <
option value = "Anxious" > Anxious < /option> < /
select >*/