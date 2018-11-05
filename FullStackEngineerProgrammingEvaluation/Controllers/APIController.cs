using FullStackEngineerProgrammingEvaluation.Models;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Newtonsoft.Json;


namespace FullStackEngineerProgrammingEvaluation.Controllers
{
    public class APIController : ApiController
    {
        // Get currency pair symbols from 1 forge api
        // api/API/getSymbols?apiKey=xxxxxxxx
        [HttpGet]
        public async Task<List<String>> getCurrencyPairSymbols([FromUri] String apiKey)
        {

            HttpClient client = new HttpClient();

            String apiURL = "https://forex.1forge.com/1.0.3/symbols?api_key=" + apiKey;

            HttpResponseMessage response = await client.GetAsync(apiURL);

            if (response.IsSuccessStatusCode)
            {
                String result = await response.Content.ReadAsStringAsync();
                List<String> rootResult = JsonConvert.DeserializeObject<List<String>>(result);
                return rootResult;
            }
            else
            {
                return null;
            }
        }

        // Get quote from 1 forge api
        // api/API/getQuote?apiKey=xxxxxxxx&currencyPairSymbol=USDCAD
        [HttpGet]
        public async Task<List<Quote>> getQuote([FromUri] String apiKey, String currencyPairSymbol)
        {

            HttpClient client = new HttpClient();

            String apiURL = "https://forex.1forge.com/1.0.3/quotes?pairs=" + currencyPairSymbol + "&api_key=" + apiKey;

            HttpResponseMessage response = await client.GetAsync(apiURL);

            if (response.IsSuccessStatusCode)
            {
                String result = await response.Content.ReadAsStringAsync();
                List<Quote> rootResult = JsonConvert.DeserializeObject<List<Quote>>(result);
                return rootResult;
            }
            else
            {
                return null;
            }
        }
    }
}
