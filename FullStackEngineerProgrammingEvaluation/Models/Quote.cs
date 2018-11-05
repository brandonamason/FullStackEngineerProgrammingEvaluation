namespace FullStackEngineerProgrammingEvaluation.Models
{
    /// <summary>
    /// Model for quote data
    /// </summary>
    public class Quote
    {
        public string symbol { get; set; }
        public float bid { get; set; }
        public float ask { get; set; }
        public float price { get; set; }
        public int timestamp { get; set; }
    }
}