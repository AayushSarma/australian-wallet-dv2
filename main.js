const ids = ["01_budget_composition", "02_category_changes", "03_category_slope", "04_category_rankings", "05_map_total", "06_map_transport_symbols", "07_map_bivariate", "08_state_heatmap", "09_monthly_trend", "10_annual_trend", "11_month_calendar", "12_inflation_categories", "13_inflation_city_heatmap", "14_inflation_food_transport"];
const opts = {actions:{export:true,source:true,compiled:false,editor:false}, renderer:'svg'};
Promise.all(ids.map(async id => {
 const box=document.getElementById('chart-'+id);
 try {const response=await fetch('charts/'+id+'.json');if(!response.ok)throw new Error('Chart specification unavailable');const spec=await response.json();box.textContent='';await vegaEmbed(box,spec,opts)}
 catch(e){box.innerHTML='<p class="error">Chart failed to load: '+e.message+'</p>';console.error(id,e)}
}));
