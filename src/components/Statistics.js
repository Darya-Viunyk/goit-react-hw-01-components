export const Statistics =({data:{id,label,percentage}})=>{
return(
  
    <div>
    <section>
  <h2>Upload stats</h2>

  <ul>
    <li>
      <span>{id.label}.docx</span>
      <span>{percentage}%</span>
    </li>
    <li>
      <span>{id.label}.pdf</span>
      <span>{percentage}%</span>
    </li>
    <li>
      <span>{id.label}.mp3</span>
      <span>{percentage}%</span>
    </li>
    <li>
      <span>{id.label}.psd</span>
      <span>{percentage}%</span>
    </li>
    <li>
      <span>{id.label}.pdf</span>
      <span>{percentage}%</span>
    </li>
  </ul>
</section>
</div>
)
    };