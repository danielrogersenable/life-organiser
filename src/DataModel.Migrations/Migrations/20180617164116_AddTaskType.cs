using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DataModel.Migrations.Migrations
{
    public partial class AddTaskType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TaskTypeId",
                table: "LifeTasks",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "TaskType",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Color = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskType", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LifeTasks_TaskTypeId",
                table: "LifeTasks",
                column: "TaskTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_LifeTasks_TaskType_TaskTypeId",
                table: "LifeTasks",
                column: "TaskTypeId",
                principalTable: "TaskType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LifeTasks_TaskType_TaskTypeId",
                table: "LifeTasks");

            migrationBuilder.DropTable(
                name: "TaskType");

            migrationBuilder.DropIndex(
                name: "IX_LifeTasks_TaskTypeId",
                table: "LifeTasks");

            migrationBuilder.DropColumn(
                name: "TaskTypeId",
                table: "LifeTasks");
        }
    }
}
