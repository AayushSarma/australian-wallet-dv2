# The Australian Wallet — FIT3179 Data Visualisation 2

One-page narrative website containing **14 Vega-Lite specifications**, including three distinct Australian map idioms (choropleth, proportional-symbol map, bivariate choropleth). Every chart JSON file is human-readable under `charts/`.

## Publish
1. Create a public GitHub repository called `australian-wallet-dv2`.
2. Upload the **contents** of this folder to the repository root (not a nested directory).
3. Settings → Pages → Deploy from a branch → `main` / `/(root)` → Save.
4. View `https://YOUR-GITHUB-USERNAME.github.io/australian-wallet-dv2/` in an incognito window.
5. Replace author placeholders in `index.html` and check all charts load.
6. Create your physical hand-drawn sketch, scan to `sketch.pdf`, upload it to the repository root.

## Sources and definitions
- ABS Monthly Household Spending Indicator, August 2026: https://www.abs.gov.au/statistics/economy/finance/monthly-household-spending-indicator/aug-2026. Selected values transcribed from published tables: national monthly/annual seasonally adjusted current-price series, state-category monthly changes and June–August category monthly changes.
- ABS CPI, September 2026: https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/sep-2026. Annual original CPI category inflation values for the eight capitals and national weighted average.
- ABS Household Expenditure Survey, 2015–16: https://www.abs.gov.au/statistics/economy/finance/household-expenditure-survey-australia-summary-results/2015-16. Historical average weekly $1,425; housing 20%, food 17%, transport 15%; remaining 48% is arithmetic residual, **not a separate ABS category**.
- State boundaries: https://github.com/rowanhogan/australian-states (GeoJSON, externally loaded from GitHub). Geographical markers on transport map are at named state capitals and signify **state-level**, not city-level, results.

## Data preparation
`state_spending.csv` = published August 2026 monthly changes by state and spending category. `category_months.csv` = published national spending-category monthly changes June–August 2026. `national_series.csv` = ABS national spending growth August 2023–August 2026. `cpi.csv` = ABS September 2026 annual price increases by city and category. Source categories abbreviated where indicated for readability; changes otherwise transcribed without smoothing. Chart 04 uses rankings calculated with the Vega-Lite window transform. Chart 07 groups states into four classes according to the sign of both food and health monthly changes. Chart 11 derives calendar year/month from reported dates. Chart 14 pivots CPI observations by city.

## Important limitations
- Historical 2015–16 household budget shares are not a measurement of 2026 spending composition.
- Monthly spending percentages at current prices cannot be interpreted as real consumption changes.
- Monthly spending growth and annual CPI inflation are not directly comparable.
- Small-multiple, related and repeated idioms may count as one chart at assessment; confirm with tutor.
- The assignment's hand-drawn sketch must be physically drawn to qualify for marks.

## Academic integrity
AI assisted with initial code, layout, editing and planning. Student must review all values, understand/edit the work, complete the physical sketch and acknowledge use in submission.
