using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using KitapAvi.Models;
using System.Linq;
using KitapAvi.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using KitapAvi.DataAccess.Data;


namespace KitapAvi
{
    [Route("api/[controller]")]
    [ApiController]
    
    
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        DbContextOptions<ApplicationDbContext> options=new DbContextOptions<ApplicationDbContext>();

        public ProductsController(ApplicationDbContext db)
        {
            _db= db;
            
        }
        
        // GET: api/<ProductsController>
        [HttpGet("{id}")]
        public Product Get(int id)
        {


            return _db.Products.SingleOrDefault(p=>p.Id==id) ;
        }
       
        // GET api/<ProductsController>/5

        // POST api/<ProductsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProductsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProductsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
